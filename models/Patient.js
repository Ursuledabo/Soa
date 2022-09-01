const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const patientSchema = mongoose.Schema({
    patientName: {type: String, required: true},
    patientMail: {type: String, required: true, unique:true},
    patientPassword: {type: String, required: true},
    patientIsMale: {type: Boolean, required:true, default: true},
    patientAdress: {type: String, required: true},
    patientContact: {type: String, required: true},
    patientBloodType: {type: String, required: false},
})

patientSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Patient', patientSchema);
