import express from "express";
import cors from "cors"
import "dotenv/config"
import mongoose from "mongoose";
import userRoutes from "./routes/user.route"
import { auth } from "express-oauth2-jwt-bearer"

const app = express()

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['POST', 'GET', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))
const checkJwt = auth({
    audience: process.env.AUDIENCE,
    issuerBaseURL: process.env.ISSUEER_BASE_URL,
    tokenSigningAlg: 'RS256'
})
app.use(express.json())
app.use(checkJwt)
app.use('/api/v1/user', userRoutes)

mongoose.connect(`${process.env.MONGODB_URI}`).then(() => {
    console.log('Mongodb connection is successfull');
    app.listen(process.env.PORT, () => {
        console.log(`Server is listening on port ${process.env.PORT}`);
    })
}).catch((error) => {
    console.log(`Mongodb conection error ${error}`);
})


