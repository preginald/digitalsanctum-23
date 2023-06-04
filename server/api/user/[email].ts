import { findUserByEmail } from "~~/server/database/repositories/userRepository";

export default defineEventHandler(async (event) => {
  const email = event.context.params.email;

  return await findUserByEmail(email);
});
