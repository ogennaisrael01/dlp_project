import { DataTypes } from "sequelize"

export const UserSchema = {
    user_id: { 
        type: DataTypes.UUID, primaryKey: true, 
        index: true, defaultValue: DataTypes.UUIDV4
    },
    email: {
        type: DataTypes.STRING,
        unique: true, index: true, allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        unique: true, index: true, allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        index: true, allowNull: true
    },
    course: {
        type: DataTypes.STRING,
        index: true, allowNull: false
    },
    isActive: {
        type: DataTypes.BOOLEAN, defaultValue: false
    },
    isVerified: {
        type: DataTypes.BOOLEAN, defaultValue: false
    }
    // sequelize automatically create the created field in the background
}

export const createConnection = async (sequelize) => {
    return sequelize.define("users", UserSchema)
}