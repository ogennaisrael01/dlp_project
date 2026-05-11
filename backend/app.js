import "dotenv/config"
import express from "express";
import { sequelize } from "./config/database.js";
import { userRouter } from "./routes/userRoutes.js";
import swaggerUi from "swagger-ui-express";
import fs from "fs";


const app = express();
const swaggerDocument = JSON.parse(fs.readFileSync('./swagger-out.json', 'utf-8'));

app.use(express.json())
app.use("/api", userRouter)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.get("/read-root", (req, res) => {
    return res.status(200).json({status: true, detaials: "App Running with status code 200"})
})

const startServer = async () => {

    const port = process.env.PORT || "3000"
    const hostName = process.env.HOSTNAME || "127.0.0.1"
    try{
        await sequelize.sync({ alter: true});
        console.log("DataBase Connected Successfully")

        app.listen(port, hostName, () => {
            console.log(`Backend Running on http(s)://${hostName}:${port}/`)
        })
    }
    catch (err){
        console.log(`Error Running Backend: ${err.message}`)
    }

}

startServer();