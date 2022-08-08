import { Request, Response } from "express";

export const post = async (req: Request, res: Response) => {
  if (!req.body.email || !req.body.password || !req.body.confirmPassword) {
    return res.send(400);
  }

  try {
    console.log("hi");
  } catch (err) {
    res.send(400);
  }
};
