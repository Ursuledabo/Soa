const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const postSchema = mongoose.Schema({
    description: {type: String,required:true},
    datePost: {type:date,required:true},
    price : {type:Number,required:true},
    keys: {type:Array,required:true},
    photos : {type:String,required:true},
    category: {type:String,required:true},
    userId:{type:Number,required:true}
    
});

doctorSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Post',postSchema);
