import { updateUserByEmail } from "~~/server/database/repositories/userRepository";

export default defineEventHandler(async (event) => {
    const email = event.context.params.email;
    const body = await readBody(event);

    const result = await updateUserByEmail(email, body);
    return result
});