import express from "express";
import cors from "cors"
import "dotenv/config"
import mongoose from "mongoose";
import userRoutes from "./routes/user.route"
import { auth } from "express-oauth2-jwt-bearer"

const app = express()

console.log(process.env.AUDIENCE, process.env.ISSUEER_BASE_URL);

app.use(auth({
    audience:process.env.AUDIENCE,
    issuerBaseURL:process.env.ISSUEER_BASE_URL
}))
app.use(cors())
app.use(express.json())
app.use('/api/v1/user', userRoutes)

mongoose.connect(`${process.env.MONGODB_URI}`).then(() => {
    console.log('Mongodb connection is successfull');
    app.listen(process.env.PORT, () => {
        console.log(`Server is listening on port ${process.env.PORT}`);
    })
}).catch((error) => {
    console.log(`Mongodb conection error ${error}`);
})


