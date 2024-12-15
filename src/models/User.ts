import mongoose, { Schema, Document } from "mongoose";

export interface SkillAttributes {
    name: string;
    level?: string;
}

export interface TribeAttributes {
    name: string;
}

export interface UserAttributes extends Document {
    firstName: string;
    lastName: string;
    email: string;
    phoneNo?: string;
    addressLine1?: string;
    addressLine2?: string;
    postalCode?: string;
    city?: string;
    countryCode?: string;
    country?: string;
    timezone?: string;
    skills: SkillAttributes[];
    tribes: TribeAttributes[];
    professionalTitle?: string;
}

const userSchema: Schema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNo: { type: String },
    addressLine1: { type: String },
    addressLine2: { type: String },
    postalCode: { type: String },
    city: { type: String },
    countryCode: { type: String },
    country: { type: String },
    timezone: { type: String },
    skills: [{ name: { type: String }, level: { type: String } }],
    tribes: [{ name: { type: String } }],
    professionalTitle: { type: String },
});

export default mongoose.model<UserAttributes>("User", userSchema);

