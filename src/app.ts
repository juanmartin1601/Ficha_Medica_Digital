import express from "express";
import dotenv from "dotenv";
import userRoutes from "./modules/user/routes";
import petRoutes from "./modules/pet/routes";
import medicalRecordRoutes from "./modules/medical-record/routes";
import setupAssociations from "./models/associations";
dotenv.config();

const app = express();
app.use(express.json());

setupAssociations();

app.use("/api", userRoutes);
app.use("/api", petRoutes);
app.use("/api", medicalRecordRoutes);

export default app;
