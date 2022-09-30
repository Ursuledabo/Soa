import { Router } from "express";
import { loginPatient, signupPatient } from "../controllers/patientControllers";

const router = Router();

router.post("/signup", signupPatient); 
router.post("/login", loginPatient);
export default router;