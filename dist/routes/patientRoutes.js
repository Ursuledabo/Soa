"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const patientControllers_1 = require("../controllers/patientControllers");
const router = (0, express_1.Router)();
router.post("/signup", patientControllers_1.signupPatient);
router.post("/login", patientControllers_1.loginPatient);
exports.default = router;
