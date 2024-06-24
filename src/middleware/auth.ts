import { NextFunction } from "express";
import { verifyToken } from "../utils/jwt";

export const authenticateJWT = (req, res, next: NextFunction): void => {
  const token = req.headers.authorization?.split(" ")[1];

  if (token) {
    try {
      const decoded = verifyToken(token);
      req.user = decoded;
      next();
    } catch (error) {
      res.status(401).json({ message: "Unauthorized" });
    }
  } else {
    res.status(401).json({ message: "Token not provided" });
  }
};
