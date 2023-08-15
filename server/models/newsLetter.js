import mongoose from "mongoose";
const newsLetterSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);
const NewsLetter = mongoose.model("NewsLetter", newsLetterSchema);

export default NewsLetter;
