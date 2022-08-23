const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const patientSchema = mongoose.Schema({
    patientName: {type: String, required: true},
    patientMail: {type: String, required: true, unique:true},
    patientpassword: {type: String, required: true},
    patientisMale: {type: Boolean, required:true},
    patientAdress: {type: String, required: true},
    patientContact: {type: String, required: true},
    patientBloodType: {type: String, required: false},
})

patientSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Patient', patientSchema);
