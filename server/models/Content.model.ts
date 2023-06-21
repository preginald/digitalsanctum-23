import mongoose, { Document } from "mongoose";

// content schema
const schema: mongoose.Schema = new mongoose.Schema(
  {
    body: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      required: false, // assuming that tags are not always required
    },
    type: {
      type: String,
      required: true, // change to false if type is not always required
    },
  },
  {
    timestamps: true,
  }
);

export interface IContent extends Document {
  body: string;
  title: string;
  slug: string;
  description: string;
  tags?: string[]; // assuming that tags are not always required
  type: string; // change to "type?: string;" if type is not always required
}

// content model
export default mongoose.model<IContent>("Content", schema);