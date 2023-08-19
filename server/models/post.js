import mongoose from "mongoose";
const postSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    tags: [
      {
        type: String,
      },
    ],
    sections: [
      {
      },
    ],
  },
  {
    timestamps: true,
  }
);
const Post = mongoose.model("Post", postSchema);

export default Post;
