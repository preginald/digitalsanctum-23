import { findContents } from "~/server/database/repositories/contentRepositories";

export default defineEventHandler(async (event) => {
    // const type = event.context.params.type
    // const slug = event.context.params.slug
    // console.log(type, slug)
    return await findContents()
});


