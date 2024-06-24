import jwt from "jsonwebtoken";

export const generateToken = (payload: object): string => {
  return jwt.sign(payload, process.env.JWT_SECRET_KEY as string, {
    expiresIn: "1h",
  });
};

export const verifyToken = (token: string): object | string => {
  return jwt.verify(token, process.env.JWT_SECRET_KEY as string);
};
