const Patient = require("../models/Patient");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


exports.singup = (req, res, next) => {
    bcrypt.hash(req.body.patientPassword, 10)
    .then(
        patientHashedPassword => {
            const patient = new Patient({
                patientName : req.body.patientName,
                patientMail: req.body.patientMail,
                patientpassword: patientHashedPassword,
                patientisMale: req.body.patientisMale,
                patientAdress: req.body.patientAdress,
                patientContact: req.body.patientContact,
                patientBloodType: req.body.patientBloodType  
            });
            patient.save()
                .then(()=> res.status(201).json({message: "Patient created successfully"})) 
                .catch(error => res.status(400).json({error}));
        }
    )
    .catch(error => res.status(500).json({error}));
}


exports.login = (req,res,next) => {
    Patient.findOne({patientMail:req.body.patientMail})
    .then(patient => {
        if (!patient){
            return res.status(401).json({message: "User not found"})
        }
        bcrypt.compare(req.body.patientPassword,patient.patientPassword)
        .then(valid => {
            if (!valid){
                return res.status(401).json({error:"Incorret password" })
            }
            res.status(200).json({
                patientId: patient._id,
                token : jwt.sign(
                    {userId: user._id},
                    'RANDOM_TOKEN_SECRET',
                    {expiresIn: '24h'}
                )
            });
        })
        .catch(error => res.status(500).json({error}));
    })
    .catch(error => res.status(500).json({error}));
}