import { Router } from "express";
import PetController from "../controllers/petController";

const router = Router();

router.post("/pets", PetController.createPet.bind(PetController));
router.get(
  "/pets/user/:userId",
  PetController.getPetsByUserId.bind(PetController)
);

export default router;
