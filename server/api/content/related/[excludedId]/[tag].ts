import { findContentByTag } from "~/server/database/repositories/contentRepositories";
export default defineEventHandler(async (event) => {
    const excludedId = event.context.params.excludedId
    const tag = event.context.params.tag;
    return await findContentByTag(excludedId, tag)
});
