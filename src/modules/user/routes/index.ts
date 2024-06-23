import { Router } from "express";
import { UserController } from "../controllers/userController";

const router = Router();

router.post("/users", UserController.createUser);
router.post("/users/:id", UserController.getUserById);

export default router;
