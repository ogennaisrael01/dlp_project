import { Sequelize } from "sequelize";


export const sequelize = new Sequelize({
            dialect: "sqlite",
            logging: false,
            storage: "./storage/database.sqlite3"
        })
