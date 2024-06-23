// src/associations.ts
import User from "../models/user";
import Pet from "../models/pet";
import MedicalRecord from "../models/medicalRecord";

const setupAssociations = () => {
  // User - Pet
  Pet.belongsTo(User, { foreignKey: "userId" });
  User.hasMany(Pet, { foreignKey: "userId" });

  // Pet - MedicalRecord
  MedicalRecord.belongsTo(Pet, { foreignKey: "petId" });
  Pet.hasMany(MedicalRecord, { foreignKey: "petId" });
};

export default setupAssociations;
