import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";

class MedicalRecord extends Model {
  public id!: number;
  public title!: string;
  public category!: string;
  public description!: string;
  public petId!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

MedicalRecord.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      autoIncrement: false,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    petId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Pets",
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "MedicalRecord",
  }
);

export default MedicalRecord;
