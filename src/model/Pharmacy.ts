import { model, Schema } from "mongoose";
export interface IPharmacy extends Document {
    pharmacyName: string;
    pharmacyAdress: string;
    pharmacyMail: string;
    pharmacyPassword: string;
    pharmacyContact: string;
}

const PharmacySchema: Schema = new Schema ({
    pharmacyName: {type: String, required:true},
    pharmacyAdress: {type: String, required:true},
    pharmacyMail: {type: String, required:true},
    pharmacyPassword: {type: String, required:true},
    pharmacyContact: {type: String, required:true},
})

export default model<IPharmacy>("Pharmacy", PharmacySchema)