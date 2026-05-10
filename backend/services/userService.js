import { UserModel } from "../models/Users.js";
import { hashPassword } from "./hashers.js";
import { Op } from "sequelize";

export class UserService {

    constructor (){}

    async createUser (email, password, name, course){
        try{
            const hashUserPassword = await hashPassword(password)
    
            const newUser = await UserModel.create({
                email, name, course,
                password: hashUserPassword
            })

            return newUser
        }
        catch (err){
            console.log(err.message)
            throw new Error(err.message)
        }
    }

    async getUser (lookup) {
        
        try{
            const user = await UserModel.findOne({ 
                where: {
                    [Op.or]: [
                        {email: lookup},
                        {user_id: lookup}
                    ]
                }
            })

            if (user){
                return { status: true, instance: user}
            }
            else {
                return { status: false, instance: "User not found"}
            }
        }
        catch (err){
            throw new Error(err.message)
        }

    }


}