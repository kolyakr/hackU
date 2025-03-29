import { Request, Response } from "express";

export const getUserCtrl = async (req: Request, res: Response) => {
  const user = req.user;
  res.json({
    user: {
      id: user?.id,
      name: user?.name,
      email: user?.email,
    },
  });
};
