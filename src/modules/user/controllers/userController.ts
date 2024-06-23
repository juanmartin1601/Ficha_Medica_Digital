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

  public static async getUserById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const user: User | null = await UserService.getUserById(id);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error fetching user" });
    }
  }
}
