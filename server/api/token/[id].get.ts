import { findToken } from "~/server/database/repositories/tokenRepository";

export default defineEventHandler(async (event) => {
    const id = event.context.params.id

    return await findToken(id);
});
