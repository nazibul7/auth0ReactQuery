import express from "express"
import { registerUser } from "../controllers/user.controller"
import { verifyJwt } from "../middlewares/auth"

const router = express.Router()

router.post('/register', verifyJwt, registerUser)

export default router