import UserModel, { IUser } from "~~/server/models/User.model";

interface IData {
  name: string;
  email: string;
}

interface IError {
  message: string;
}

function createError({ message }: IError): Error {
  // Implement your error creation logic here
  return new Error(message);
}

export async function createUser(data: IData): Promise<IUser> {
  const existingUser = await UserModel.findOne(data);

  if (existingUser) {
    return existingUser;
  }

  try {
    const newUser = await UserModel.create(data);
    return newUser;
  } catch (e: any) {  // Change is here
    throw createError({
      message: e.message,
    });
  }
}

export async function findUserById(id: string): Promise<IUser> {
  try {
    const user = await UserModel.findOne({ id });
    if (!user) {
      throw createError({
        message: "User not found",
      });
    }
    return user;
  } catch (e: any) {  // And here
    throw createError({
      message: e.message,
    });
  }
}

export async function findUserByEmail(email: string): Promise<IUser | null> {
  try {
    const user = await UserModel.findOne({ email });
    return user;
  } catch (e: any) {  // And here
    throw createError({
      message: e.message,
    });
  }
}

export async function updateUserByEmail(email: string, data: Partial<IUser>): Promise<IUser | null> {
  try {
    const user = await UserModel.findOneAndUpdate({ email }, data, { new: true });
    return user;
  } catch (error) {
    console.error("Failed to update user by email:", error);
    throw new Error("Failed to update user by email");
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