import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";
//import User from "./user";
//import MedicalRecord from "./medicalRecord";

class Pet extends Model {
  public id!: number;
  public name!: string;
  public species!: string;
  public birthDate!: Date;
  public gender!: string;
  public userId!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Pet.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      autoIncrement: false,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    species: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
    },
  },
  {
    sequelize,
    tableName: "pets",
  }
);
//Pet.belongsTo(User, { foreignKey: "userId" });
//User.hasMany(Pet, { foreignKey: "userId" });
export default Pet;
