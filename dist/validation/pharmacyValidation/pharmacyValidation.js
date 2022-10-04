"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginPharmacyValidation = exports.signupPharmacyValidation = void 0;
const validator_1 = __importDefault(require("../utils/validator"));
const pharmacySchema_1 = require("./pharmacySchema");
const signupPharmacyValidation = (req, res, next) => { (0, validator_1.default)(pharmacySchema_1.pharmacySchema.singupPharmacy, req.body, next); };
exports.signupPharmacyValidation = signupPharmacyValidation;
const loginPharmacyValidation = (req, res, next) => { (0, validator_1.default)(pharmacySchema_1.pharmacySchema.loginPharmacy, req.body, next); };
exports.loginPharmacyValidation = loginPharmacyValidation;
