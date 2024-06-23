import { Model } from "sequelize";
import User from "../../../models/user";
import Pet from "../../../models/pet";
import MedicalRecord from "../../../models/medicalRecord";

export class UserService {
  public static async createUser(userData: {
    name: string;
    dni: string;
    address: string;
    email: string;
  }): Promise<User> {
    return await User.create(userData);
  }

  public static async getUserById(id: string): Promise<User | null> {
    //return await User.findByPk(id);
    const user = await User.findOne({
      where: { id },
      include: [
        {
          model: Pet,
          as: "pets",
          required: false,
          include: [
            { model: MedicalRecord, as: "medicalRecords", required: false },
          ],
        },
      ],
    });
    return user;
  }
}
