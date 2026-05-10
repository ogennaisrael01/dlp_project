import { sequelize } from "../config/database.js";
import { createConnection } from "../schemas/userSchema.js";


export const UserModel = await createConnection(sequelize)