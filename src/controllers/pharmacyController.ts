import { RequestHandler } from "express";
import Pharmacy from "../model/Pharmacy";
import bcrypt from "bcrypt"
import createHttpError, {InternalServerError} from "http-errors";
import jwt from "jsonwebtoken";


export const signupPharmacy:RequestHandler = async (req, res, next) => {
    const {
            pharmacyName,
            pharmacyAdress,
            pharmacyMail,
            pharmacyPassword,
            pharmacyContact
        } = req.body;
        
        try {
            const existingpharmacy = await Pharmacy.findOne({pharmacyMail});
        if(existingpharmacy) return next(createHttpError(422, "email already exists"));
        
        const hashedPassword = await bcrypt.hash(pharmacyPassword, 8);
            const newpharmacy = new Pharmacy({
                pharmacyName,
                pharmacyMail,
                pharmacyPassword: hashedPassword,
                pharmacyAdress,
                pharmacyContact});
            await newpharmacy.save();            
            res.json({message:"pharmacy created"});
    } catch (error) {
            return next(InternalServerError);
        }
}

export const loginPharmacy:RequestHandler = async (req, res, next) => {
    const {pharmacyMail, pharmacyPassword} = req.body;
    try {
        const pharmacy = await Pharmacy.findOne({pharmacyMail});
        if(!pharmacy) return next(createHttpError(404, "pharmacy not found"));
        const isPasswordValid = await bcrypt.compare(pharmacyPassword, pharmacy.pharmacyPassword);
        if(!pharmacy.pharmacyIsVerified) return next(createHttpError(406, "User not verified"))
        if(!isPasswordValid) return next(createHttpError(401, "invalid password"));
        const token = jwt.sign({
            pharmacyname: pharmacy.pharmacyName,
            pharmacyemail: pharmacy.pharmacyMail,
            pharmacyid: pharmacy._id}, 
            process.env.JWT_SECRET as string, 
            {
                expiresIn: "12h"
            }
        );

        res.cookie("jwt", token);

        res.json({message:"login successful as", token});
    } catch (error) {
        return next(InternalServerError);
    }
}

