import { Request, Response } from "express";
import { AuthService } from "../services/authService";

export class AuthController {
  public static async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;
      const token = await AuthService.login(email, password);
      res.status(200).json({ token });
    } catch (error) {
      res.status(401).json({ message: "Invalid credentials" });
    }
  }
}
