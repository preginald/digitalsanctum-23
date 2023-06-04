// import { addSessionToken } from "~~/server/database/repositories/userRepository";
import { createToken } from "~~/server/database/repositories/tokenRepository";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    return await createToken(body);
});