import User from "../models/userModel.js";
import Post from "../models/postModel.js";

export const createPost = async (req, res) => {
  if (!req.user.isAdmin) {
    return res
      .status(402)
      .json({ message: "Sorry ! Only admin allow to create post ." });
  }

  const slug = req.body.title
    .split(" ")
    .join("-")
    .toLowerCase()
    .replace(/[^a-zA-z0-9-]/g, "");

  const newPost = new Post({
    ...req.body,
    slug,
    belongAuthorID: req.user.id,
  });

  try {
    const savedPost = await newPost.save();
    res.status(201).json({ message: "Create post successfully !" });
  } catch (e) {
    console.log("Error in createPost controller !" + e);
    res
      .status(500)
      .json({ error: "Internal server error ! Please contact us ." });
  }
};
