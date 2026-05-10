import { Router } from "express";
import { register } from "../controllers/userControllers.js";

export const userRouter = Router();

userRouter.post("/register", register) // route for student registration