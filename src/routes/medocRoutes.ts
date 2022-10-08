import { Router} from "express";
import { getMedoc, testAdd100RandomMedoc} from "../controllers/medocControllers";


const router = Router();

router.post("/add:pharmacyId", testAdd100RandomMedoc);
router.get("/findOne:medocId", getMedoc)


export default router;