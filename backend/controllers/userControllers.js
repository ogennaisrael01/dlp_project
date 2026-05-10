import { regValidator } from "../config/validators.js"
import { UserService } from "../services/userService.js"



export const register = async (req, res) => {

    const data = req.body

    const isValid = regValidator(data)
    if (!isValid){
        return res.status(400).json({status: false, details: regValidator.errors})
    }

    const { email, password, name, course } = data
    const regService = new UserService()
    const userExits = await regService.getUser(email)
    
    if (userExits.status){
        console.log("User Found!")
        return res.status(409).json({status: true, details: "Conflicting email address.."})
    }

    try{
        const createUser = await regService.createUser(email, password, name, course)
        return res.status(201).json({status: true, details: {
            message: "User created",
            data: { user_id: createUser.user_id, createdAt: createUser.createdAt}
        }})
    }
    catch (err){
        return res.status(500).json({status: false, details: err.message})
    }
}