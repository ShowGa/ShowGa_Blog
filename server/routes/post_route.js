import express from "express";
import { verifyUser } from "../utils/verifyUser.js";
import {
  createPost,
  getAllPosts,
  getPost,
} from "../controllers/post_controller.js";

const router = express.Router();

router.post("/create", verifyUser, createPost);

// for public search
router.get("/getallposts", getAllPosts);

router.get("/getpost/:slug", getPost);

export default router;
