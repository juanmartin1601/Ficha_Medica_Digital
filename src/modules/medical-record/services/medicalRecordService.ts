import MedicalRecord from "../../../models/medicalRecord";

export class MedicalRecordService {
  public static async createMedicalRecord(recordData: {
    title: string;
    category: string;
    description: string;
    petId: string;
  }): Promise<MedicalRecord> {
    return await MedicalRecord.create(recordData);
  }

  public static async updateMedicalRecord(
    id: string,
    updateData: {
      title?: string;
      category?: string;
      description?: string;
    }
  ): Promise<MedicalRecord | null> {
    let updatedMedicalRecord: MedicalRecord | null = null;
    const [updated] = await MedicalRecord.update(updateData, { where: { id } });
    if (updated) {
      updatedMedicalRecord = await MedicalRecord.findOne({ where: { id } });
    }
    return updatedMedicalRecord;
  }

  public static async deleteMedicalRecord(id: string): Promise<number> {
    return await MedicalRecord.destroy({ where: { id } });
  }

  public static async getMedicalRecordsByPetId(
    petId: string
  ): Promise<MedicalRecord[]> {
    return await MedicalRecord.findAll({ where: { petId } });
  }
}
