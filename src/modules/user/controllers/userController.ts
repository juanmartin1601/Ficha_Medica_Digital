import { Request, Response } from "express";
import User from "../../../models/user";
import { UserService } from "../services/userService";

export class UserController {
  public static async createUser(req: Request, res: Response): Promise<void> {
    try {
      const { name, dni, address, email } = req.body;
      const newUser: User = await UserService.createUser({
        name,
        dni,
        address,
        email,
      });
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error: "Error creating user" });
    }
  }
}
