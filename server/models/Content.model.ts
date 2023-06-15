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
  },
  {
    timestamps: true,
  }
);

export interface IContent extends Document {
  body: string;
  title: string;
  slug: string;
}

// content model
export default mongoose.model<IContent>("Content", schema);
