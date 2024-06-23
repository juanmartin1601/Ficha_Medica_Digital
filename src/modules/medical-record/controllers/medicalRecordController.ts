import { Request, Response } from "express";
import MedicalRecord from "../../../models/medicalRecord";
import { MedicalRecordService } from "../services/medicalRecordService";

export class MedicalRecordController {
  public static async createMedicalRecord(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const { title, category, description, petId } = req.body;
      const newMedicalRecord: MedicalRecord =
        await MedicalRecordService.createMedicalRecord({
          title,
          category,
          description,
          petId,
        });
      res.status(201).json(newMedicalRecord);
    } catch (error) {
      res.status(500).json({ error: "Error creating medical record" });
    }
  }

  public static async updateMedicalRecord(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const { id } = req.params;
      const { title, category, description } = req.body;
      const updatedMedicalRecord: MedicalRecord | null =
        await MedicalRecordService.updateMedicalRecord(id, {
          title,
          category,
          description,
        });

      if (updatedMedicalRecord) {
        res.status(200).json(updatedMedicalRecord);
      } else {
        res.status(404).json({ error: "Medical record not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error updating medical record" });
    }
  }

  public static async deleteMedicalRecord(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const { id } = req.params;
      const deleted: number = await MedicalRecordService.deleteMedicalRecord(
        id
      );

      if (deleted) {
        res.status(204).send();
      } else {
        res.status(404).json({ error: "Medical record not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error deleting medical record" });
    }
  }

  public static async getMedicalRecordsByPetId(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const { petId } = req.params;
      const medicalRecords =
        await MedicalRecordService.getMedicalRecordsByPetId(petId);
      res.status(200).json(medicalRecords);
    } catch (error) {
      res.status(500).json({ error: "Error fetching medical records" });
    }
  }

  public static async getMedicalRecordsByUserDni(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const { dni } = req.params;
      const medicalRecords =
        await MedicalRecordService.getMedicalRecordsByUserDni(dni);
      res.status(200).json(medicalRecords);
    } catch (error) {
      res.status(500).json({ error: "Error fetching medical records" });
    }
  }
}
