"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const medocControllers_1 = require("../controllers/medocControllers");
const router = (0, express_1.Router)();
router.post("/add:pharmacyId", medocControllers_1.testAdd100RandomMedoc);
router.get("/findOne:medocId", medocControllers_1.getMedoc);
exports.default = router;
