import bcrypt from "bcryptjs";


export const hashPassword = async (password) => {

    try{
        const saltRounds = process.env.SALT_ROUNDS || 10
        const salt = await bcrypt.genSalt(saltRounds)

        const hashedPassword = await bcrypt.hash(password, salt)

        return hashedPassword
    }
    catch (err){
        console.log(err.message)
    }

}

export const verifyPassword = async ( password, hashedPassword) => {
    try{
        return bcrypt.compare(password, hashPassword)
    }
    catch (err){
        console.log(err.message)
    }
}
