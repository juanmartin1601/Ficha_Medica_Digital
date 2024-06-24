import { Router } from "express";
import PetController from "../controllers/petController";

const router = Router();

router.post("/pets", PetController.createPet);

export default router;
