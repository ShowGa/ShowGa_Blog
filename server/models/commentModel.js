import mongoose, { Schema } from "mongoose";

const commentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  likes: {
    type: Array,
    default: [],
  },
  numOfLikes: {
    type: Number,
    default: 0,
  },
  belongPostID: {
    type: String,
    required: true,
  },
  belongUserID: {
    type: String,
    required: true,
  },
});

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
