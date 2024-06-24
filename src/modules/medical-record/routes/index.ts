import { Router } from "express";
import { MedicalRecordController } from "../controllers/medicalRecordController";
import { authenticateJWT } from "../../../middleware/auth";

const router = Router();

router.post("/medical-records", MedicalRecordController.createMedicalRecord);
router.put("/medical-records/:id", MedicalRecordController.updateMedicalRecord);
router.delete(
  "/medical-records/:id",
  authenticateJWT,
  MedicalRecordController.deleteMedicalRecord
);
router.get(
  "/medical-records/pet/:petId",
  authenticateJWT,
  MedicalRecordController.getMedicalRecordsByPetId
);
router.get(
  "/medical-records/user/:dni",
  authenticateJWT,
  MedicalRecordController.getMedicalRecordsByUserDni
);

export default router;
