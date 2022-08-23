const Doctor = require("../models/Doctor");
const bcrypt = require("bcrypt");

exports.signup = (req, res, next) =>{
    bcrypt.hash(req.body.doctorPasword, 10)
    .then(
        doctorHashedPassword => {
            const doctor = new Doctor({
                doctorName:req.body.doctorName,
                doctorFirstName:req.body.doctorFirstName,
                doctorMail :req.body.doctorMail,
                doctorAddress :req.body.doctorAddress,
                doctorPasword:doctorHashedPassword,
                doctorContact :req.body.doctorContact,
                doctorGender:req.body.doctorGender,
                doctorType :req.body.doctorType,
                doctorSpeciality:req.body.doctorSpeciality,
                doctorOther :req.body.doctorOther,
                doctorReference:req.body.doctorReference,
        });
        doctor.save()
        .then(()=> res.status(201).json({message: "Patient created successfully"}))
        .catch(error => res.status(400).json({error}));
         
    })
    .catch(error => res.status(500).json({error}));
}