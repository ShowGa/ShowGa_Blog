import express from "express";
import { login, logOut, signUp } from "../controllers/auth_controller.js";

const router = express.Router();

router.post("/signup", signUp);

router.post("/login", login);

router.get("/logout", logOut);

export default router;
