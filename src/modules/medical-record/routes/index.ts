import { Router } from "express";
import { MedicalRecordController } from "../controllers/medicalRecordController";

const router = Router();

router.post("/medical-records", MedicalRecordController.createMedicalRecord);
router.put("/medical-records/:id", MedicalRecordController.updateMedicalRecord);
router.delete(
  "/medical-records/:id",
  MedicalRecordController.deleteMedicalRecord
);
router.get(
  "/medical-records/pet/:petId",
  MedicalRecordController.getMedicalRecordsByPetId
);
router.get(
  "/medical-records/user/:dni",
  MedicalRecordController.getMedicalRecordsByUserDni
);

export default router;
