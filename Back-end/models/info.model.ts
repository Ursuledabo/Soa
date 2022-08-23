import mongoose from "mongoose";

let infoSchema = new mongoose.Schema({
    doctorName : {type:String, required:true},
    doctorSurname : {type:String, required:true},
    doctorDescription : {type:String, required:true},
});

const Info = mongoose.model("Infos", infoSchema);
export default Info;