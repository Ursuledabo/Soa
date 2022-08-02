const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    firstname: {type: String,required:true},
    lastname: {type:String,required:true},
    // sex: {type:Boolean,required:true},
    address: {type:String,required:true},
    birth: {type:Date,required:true},
    email: {type:String,required:true,unique:true},
    password: {type:String,required:true, unique:true},
    tel :{type:String,required:true},
});

doctorSchema.plugin(uniqueValidator);
module.exports = mongoose.model('User',userSchema);
