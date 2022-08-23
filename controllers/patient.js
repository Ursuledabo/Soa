const Patient = require("../models/Patient");
const bcrypt = require("bcrypt");

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