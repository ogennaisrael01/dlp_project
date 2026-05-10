import "dotenv/config"
import bcrypt from "bcryptjs";


export const hashPassword = async (password) => {

    try{
        const saltRounds = parseInt(process.env.SALT_ROUNDS) || 10
        const salt = await bcrypt.genSalt(saltRounds)

        if (!password){
            throw new Error("password cannot be empty")
        }
        const hashedPassword = await bcrypt.hash(password, salt)
        return hashedPassword
    }
    catch (err){
        throw new Error(err.message)
    }

}

export const verifyPassword = async ( password, hashedPassword) => {
    try{
        return bcrypt.compare(password, hashPassword)
    }
    catch (err){
        throw new Error(err.message)
    }
}
