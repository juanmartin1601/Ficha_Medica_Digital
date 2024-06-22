import { Router } from "express";
import { UserController } from "../controllers/userController";

const router = Router();

router.post("/users", UserController.createUser.bind(UserController));

export default router;
