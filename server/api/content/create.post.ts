import { createContent } from "~/server/database/repositories/contentRepositories";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    return await createContent(body);
});
