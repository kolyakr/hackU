import { Router } from "express";
import { authorize } from "../middlewares/authorize";
import { ctrlWrapper } from "../utils/ctrlWrapper";
import { getUserCtrl } from "../controllers/user";

export const userRouter = Router();

userRouter.get("/me", authorize, ctrlWrapper(getUserCtrl));
