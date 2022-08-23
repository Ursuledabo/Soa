const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const postSchema = mongoose.Schema({
    doctorName: {type: String,required:true},
    doctorFirstName: {type:String,required:true},
    doctorAddress : {type:Number,required:true},
    
});

doctorSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Post',postSchema);
