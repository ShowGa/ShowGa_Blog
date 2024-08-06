import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  banerImg: {
    type: String,
    default: "",
  },
  content: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  views: {
    type: Number,
  },
  slug: {
    type: String,
    required: true,
  },
  belongAuthorID: {
    type: String,
    required: true,
  },
});

const Post = mongoose.model("Post", postSchema);

export default Post;
