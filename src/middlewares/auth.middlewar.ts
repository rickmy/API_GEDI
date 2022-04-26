import { NextFunction, Request, Response } from "express";
const jwt = require("jsonwebtoken");

export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authorization = req.header("Authorization");
  if (!authorization) {
    return res.status(401).json("🚫 Un-Authorized 🚫");
  }
  const token = authorization.split(" ")[1];

  jwt.verify(token, process.env.JWT_ACCESS_SECRET, (err: any, user: any) => {
    if (err) {
      console.log("error", err);
      return res.status(403).json('"🚫 Un-Authorized 🚫"');
    }
    next();
  });
};
