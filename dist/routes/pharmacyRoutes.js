"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pharmacyController_1 = require("../controllers/pharmacyController");
const pharmacyValidation_1 = require("../validation/pharmacyValidation/pharmacyValidation");
const router = (0, express_1.Router)();
router.post("/signup", pharmacyValidation_1.signupPharmacyValidation, pharmacyController_1.signupPharmacy);
router.post("/login", pharmacyValidation_1.loginPharmacyValidation, pharmacyController_1.loginPharmacy);
exports.default = router;
