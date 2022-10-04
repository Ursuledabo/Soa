import Joi from 'joi';

export const pharmacySchema = {
    singupPharmacy:Joi.object({
        pharmacyName: Joi.string().required(),
        pharmacyMail: Joi.string().email().required(),
        pharmacyPassword: Joi.string().required(),
        pharmacyAdress: Joi.string().required(),
        pharmacyContact: Joi.string().required(),

    }),
    loginPharmacy:Joi.object({
        pharmacyMail: Joi.string().email().required(),
        pharmacyPassword: Joi.string().required(),
    })
};