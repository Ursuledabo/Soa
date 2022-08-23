const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const pharmacy = mongoose.Schema({
    Name: {type: String,required:true},
    Address: {type:String,required:true},
    Email: {type:String,required:true,unique:true},
    Password: {type:String,required:true, unique:true},
    Contact :{type:String,required:true},
});

pharmacySchema.plugin(uniqueValidator);
module.exports = mongoose.model('Pharmacy',pharmacySchema);
