import mongoose from "mongoose";

const images = new mongoose.Schema(
  {
    idColor: {
      type: mongoose.Schema.ObjectId,
      ref: "publications.colors",
      required: true,
    },
    images: {
      type: Array,
      required: true,
    },
  }
);
export default mongoose.model("Images", images);
