import { Router } from "express";
import { loginPatient, sendVerificationMail, signupPatient } from "../controllers/patientControllers";
import { loginPatientValidation, signupPatientValidation} from "../validation/patientValidation/patientValidation";

const router = Router();

router.post("/signup",signupPatientValidation,signupPatient); 
router.post("/login",loginPatientValidation,loginPatient);
router.post("/mail", sendVerificationMail)
export default router;