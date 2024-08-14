import express from "express";
import { verifyUser } from "../utils/verifyUser.js";
import { createPost, getAllPosts } from "../controllers/post_controller.js";

const router = express.Router();

router.post("/create", verifyUser, createPost);

// for public search
router.get("/getallposts", getAllPosts);

export default router;
