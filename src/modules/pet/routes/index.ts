import { Router } from "express";
import PetController from "../controllers/petController";

const router = Router();

router.post("/pets", PetController.createPet.bind(PetController));

export default router;
