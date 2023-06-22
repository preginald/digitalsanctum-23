import ContentModel, { IContent } from "~/server/models/Content.model";

interface IData {
    title: string;
    slug: string;
    body: string;
}

interface IError {
    message: string;
}

function createError({ message }: IError): Error {
    // Implement your error creation logic here
    return new Error(message);
}

export async function createContent(data: IData): Promise<IContent> {
    try {
        const newContent = await ContentModel.create(data);
        return newContent;
    } catch (e: any) {  // Change is here
        throw createError({
            message: e.message,
        });
    }
}

export async function findContentBySlug(type: string, slug: string): Promise<IContent> {
    try {
        const content = await ContentModel.findOne({ type, slug });
        // const content = await ContentModel.find();
        if (!content) {
            throw createError({
                message: "Page not found",
            });
        }
        return content;
    } catch (e: any) {  // And here
        throw createError({
            message: e.message,
        });
    }
}

export async function findContents(): Promise<IContent> {
    try {
        const contents = await ContentModel.find({ type: "guides" }, { title: 1, tags: 1, slug: 1 })
        if (!contents) {
            throw createError({
                message: "Page not found",
            });
        }
        return contents;
    } catch (e: any) {  // And here
        throw createError({
            message: e.message,
        });
    }
}

export async function findContentByTag(excludedId: string, tag: string): Promise<IContent> {
    tag = decodeURIComponent(tag)
    try {
        const content = await ContentModel.find({ tags: tag, _id: { $ne: excludedId } }, { title: 1, slug: 1 });
        // const content = await ContentModel.find({ tags: tag }, { title: 1, slug: 1 });
        if (!content) {
            throw createError({
                message: "Page not found",
            });
        }
        return content;
    } catch (e: any) {  // And here
        throw createError({
            message: e.message,
        });
    }
}

export async function updateContentBySlug(slug: string, data: Partial<IContent>): Promise<IContent | null> {
    try {
        const content = await ContentModel.findOneAndUpdate({ slug }, data, { new: true });
        return content;
    } catch (error) {
        console.error("Failed to update page by slug:", error);
        throw new Error("Failed to update page by slug");
    }
}
