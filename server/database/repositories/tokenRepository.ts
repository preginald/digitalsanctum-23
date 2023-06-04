import TokenModel from "~/server/models/Token.model";

interface IData {
  email: string;
}

interface IError {
  message: string;
}

function createError({ message }: IError): Error {
  // Implement your error creation logic here
  return new Error(message);
}

export async function createToken(data: {}) {

  const length = 32
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let token = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    token += characters.charAt(randomIndex);
  }

  try {
    const newToken = await TokenModel.create({ email: data.email, referrer: data.referrer, token: token });
    return newToken;
  } catch (e: any) {  // Change is here
    throw createError({
      message: e.message,
    });
  }
}

export async function findToken(token: string) {
  try {
    const result = await TokenModel.findOne({ token });
    if (!result) {
      return false
      throw createError({
        message: "Token not found",
      });
    }
    return result;
  } catch (e: any) {  // And here
    throw createError({
      message: e.message,
    });
  }
}

export async function addSessionToken(email: string): Promise<IUser | null> {
  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      throw createError({
        message: "User not found",
      });
    }

    const length = 32
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let token = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charactersLength);
      token += characters.charAt(randomIndex);
    }

    // Create the session object
    const session = {
      token: token,
      created_at: new Date(),
    };

    // Add the new session to the user's sessions array
    user.sessions.push(session);

    // Save the user
    await user.save();

    return user;
  } catch (e: any) {
    throw createError({
      message: e.message,
    });
  }
}