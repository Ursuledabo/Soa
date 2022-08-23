const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const pharmacy = mongoose.Schema({
    name: {type: String,required:true},
    address: {type:String,required:true},
    email: {type:String,required:true,unique:true},
    password: {type:String,required:true, unique:true},
    tel :{type:String,required:true},
});

pharmacySchema.plugin(uniqueValidator);
module.exports = mongoose.model('Pharmacy',pharmacySchema);
