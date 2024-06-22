import { Router } from "express";
import { MedicalRecordController } from "../controllers/medicalRecordController";

const router = Router();

router.post(
  "/medical-records",
  MedicalRecordController.createMedicalRecord.bind(MedicalRecordController)
);
router.put(
  "/medical-records/:id",
  MedicalRecordController.updateMedicalRecord.bind(MedicalRecordController)
);
router.delete(
  "/medical-records/:id",
  MedicalRecordController.deleteMedicalRecord.bind(MedicalRecordController)
);
router.get(
  "/medical-records/pet/:petId",
  MedicalRecordController.getMedicalRecordsByPetId.bind(MedicalRecordController)
);

export default router;
