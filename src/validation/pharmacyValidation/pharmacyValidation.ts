import { RequestHandler } from "express";
import validator from "../utils/validator";
import { pharmacySchema } from "./pharmacySchema";

export const signupPharmacyValidation: RequestHandler = (req, res, next) =>
 { validator(pharmacySchema.singupPharmacy, req.body, next) };
export const loginPharmacyValidation: RequestHandler = (req, res, next) => 
{ validator(pharmacySchema.loginPharmacy, req.body, next) }
