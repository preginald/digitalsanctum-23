import { updateContentById } from "~/server/database/repositories/contentRepositories";

export default defineEventHandler(async (event) => {
    // Extract the ID from the URL parameters
    const { id } = event.context.params;

    // Extract the body data from the request
    const body = await readBody(event);

    // Call the updateContentById function with the ID and the body data
    return await updateContentById(id, body);
});