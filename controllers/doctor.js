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
                doctorPassword:doctorHashedPassword,
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

exports.login = (req,res,next) => {
    Doctor.findOne({doctorMail:req.body.doctorMail})
    .then(doctor => {
        if (!doctor){
            return res.status(401).json({message: "Doctor not found"})
        }
        bcrypt.compareSync(req.body.doctorPassword,doctor.doctorPassword)
        .then(valid => {
            if (!valid){
                return res.status(401).json({error:"Incorret password" })
            }
            res.status(200).json({
                doctorId: doctor._id,
                token : jwt.sign(
                    {doctorId: doctor._id},
                    'RANDOM_TOKEN_SECRET',
                    {expiresIn: '24h'}
                )
            });
        })
        .catch(error => res.status(500).json({error}));
    })
    .catch(error => res.status(500).json({error}));
}