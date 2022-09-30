"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const patientControllers_1 = require("../controllers/patientControllers");
const patientValidation_1 = require("../validation/patientValidation/patientValidation");
const router = (0, express_1.Router)();
router.post("/signup", patientValidation_1.signupPatientValidation, patientControllers_1.signupPatient);
router.post("/login", patientValidation_1.loginPatientValidation, patientControllers_1.loginPatient);
exports.default = router;
