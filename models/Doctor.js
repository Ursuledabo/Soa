const mongoose = require('mongoose');

const doctorSchema = mongoose.Schema({
    doctorName: {type: String,required:true},
    doctorFirstName: {type:String,required:true},
    doctorMail : {type:String,required:true},
    doctorAddress : {type:String,required:true},
    doctorPasword: {type:String,required:true},
    doctorContact : {type:String,required:true},
    doctorGender: {type:String,required:true},
    doctorType : {type:Boolean,required:true},
    doctorSpeciality: {type:String,required:false},
    doctorOther : {type:String,required:false},
    doctorReference: {type:String,required:true}, 
});

module.exports = mongoose.model('Doctor',doctorSchema);
