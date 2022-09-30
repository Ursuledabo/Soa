import { RequestHandler } from "express";
import Patient from "../model/Patient";
import bcrypt from "bcrypt"
import createHttpError, {InternalServerError} from "http-errors";

export const signupPatient:RequestHandler = async (req, res, next) => {
    const {patientName,
        patientMail,
        patientPassword,
        patientIsMale,
        patientAdress,
        patientContact,
        patientBloodType} = req.body;

        
        try {
            const existingPatient = await Patient.findOne({patientMail});
        if(existingPatient) return next(createHttpError(422, "email already exists"));
        
        const hashedPassword = await bcrypt.hash(patientPassword, 8);
            const newPatient = new Patient({
                patientName,
                patientMail,
                patientPassword: hashedPassword,
                patientIsMale,
                patientAdress,
                patientContact,
                patientBloodType});
            await newPatient.save();            
            res.json({message:"patient created"});
    } catch (error) {
            return next(InternalServerError);
        }
}

export const loginPatient:RequestHandler = async (req, res, next) => {
    const {patientMail, patientPassword} = req.body;
    try {
        const patient = await Patient.findOne({patientMail});
        if(!patient) return next(createHttpError(404, "patient not found"));
        const isPasswordValid = await bcrypt.compare(patientPassword, patient.patientPassword);
        if(!isPasswordValid) return next(createHttpError(401, "invalid password"));
        res.json({message:"login successful"});
    } catch (error) {
        return next(InternalServerError);
    }
}