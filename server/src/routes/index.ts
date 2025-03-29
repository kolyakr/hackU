import { Router } from "express";
import { authRouter } from "./auth";
import { userRouter } from "./user";
import { projectsRouter } from "./project";

export const rootRouter = Router();

rootRouter.use("/auth", authRouter);
rootRouter.use(userRouter);
rootRouter.use("/projects", projectsRouter);
