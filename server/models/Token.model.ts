import mongoose from "mongoose";

// token schema
const schema: mongoose.Schema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      required: true,
    },
    referrer: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// token model
export default mongoose.model("Token", schema);
