import { findContentByTag } from "~/server/database/repositories/contentRepositories";
export default defineEventHandler(async (event) => {
    const tag = event.context.params.tag;
    return await findContentByTag(tag)
});
