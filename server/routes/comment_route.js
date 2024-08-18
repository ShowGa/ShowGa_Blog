import express from "express";
import { verifyUser } from "../utils/verifyUser.js";
import {
  createComment,
  getPostComments,
} from "../controllers/comment_controller.js";

const router = express.Router();

router.post("/create", verifyUser, createComment);

router.get("/getpostcomments/:belongPostID", getPostComments);

export default router;
