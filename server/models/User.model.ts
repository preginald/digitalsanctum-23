import mongoose, { Document } from "mongoose";

// user schema
const schema: mongoose.Schema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    phone: {
      type: String,
    },
    business_name: {
      type: String,
    },
    business_size: {
      type: String,
    },
    employee_count: {
      type: String,
    },
    business_industry: {
      type: String,
    },
    research: {
      type: Object
    }
  },
  {
    timestamps: true,
  }
);

export interface IUser extends Document {
  email: string;
  first_name?: string;
  last_name?: string;
  phone?: string;
  business_name?: string;
}

// user model
export default mongoose.model<IUser>("User", schema);
