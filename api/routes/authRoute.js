import express from "express";
import cors from "cors";

import { loginUser, registerUser } from '../controllers/authController.js'


const router = express.Router()
router.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
router.post("/register", registerUser)
router.post("/login", loginUser)
// router.get("/profile", getProfile )


export default router
