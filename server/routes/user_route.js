import express from "express";
import { verifyUser } from "../utils/verifyUser.js";
import { updateUser } from "../controllers/user_controller.js";

const router = express.Router();

// update User info
router.patch("/update/:userId", verifyUser, updateUser);

export default router;
