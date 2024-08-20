import express from "express";
import { verifyUser } from "../utils/verifyUser.js";
import {
  createPost,
  getAllPosts,
  getPost,
  getSidebarPostCard,
  postClickLike,
  updatePost,
} from "../controllers/post_controller.js";

const router = express.Router();

router.post("/create", verifyUser, createPost);

// for public search
router.get("/getallposts", getAllPosts);

router.get("/getpost/:slug", getPost);

// get recommend sidebar posts
router.get("/getsidebarpost", getSidebarPostCard);

router.patch("/updatepost/:slug", verifyUser, updatePost);

// Like
router.get("/postclicklike/:slug", postClickLike);

export default router;
