import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
// router
import authRouter from "./routes/auth_route.js";

dotenv.config();
const app = express();

mongoose
  .connect(process.env.MONGODB_CONNECTION || "mongodb://127.0.0.1/showgablogDB")
  .then(() => {
    console.log("Successfully connect to MongoDB");
  })
  .catch((e) => {
    console.log(e);
  });

app.use(cors());
app.use(cookieParser());
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// route
app.use("/server/auth", authRouter);

app.listen(8080, () => {
  console.log("Server listening to Port 8080");
});
