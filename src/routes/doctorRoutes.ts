import { Router } from "express";
import { loginDoctor, signupDoctor } from "../controllers/doctorControllers";
import { loginPatient, sendVerificationMail, signupPatient, verifyPatientMail } from "../controllers/patientControllers";
import { loginDoctorValidation, signupDoctorValidation} from "../validation/doctorValidation/doctorValidation";

const router = Router();

router.post("/signup",signupDoctorValidation,signupDoctor); 
router.post("/login",loginDoctorValidation,loginDoctor);

export default router;