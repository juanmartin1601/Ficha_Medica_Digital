import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const DB_URL = process.env.DB_URL as string;
export const sequelize = new Sequelize(DB_URL, {
  logging: false,
  dialectOptions: {
    useNativeUUID: true,
    ssl:
      process.env.POSTGRES_SSL == "true"
        ? {
            rejectUnauthorized: false,
          }
        : false,
  },
});
export default sequelize;
