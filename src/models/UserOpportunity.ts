import mongoose, { Schema, Document } from "mongoose";
import { OpportunityAttributes } from "./Opportunity";
import { UserAttributes } from "./User";

export interface UserOpportunityAttributes extends Document {
    opportunity: OpportunityAttributes;
    member: UserAttributes;
    status: "Pending" | "Accepted" | "Rejected";
    reasonToJoin?: string;
    involvementTimePerWeek?: string;
}

const userOpportunitySchema: Schema = new Schema({
    opportunity: { type: Schema.Types.ObjectId, ref: "Opportunity", required: true },
    member: { type: Schema.Types.ObjectId, ref: "User", required: true },
    status: { type: String, enum: ["Pending", "Accepted", "Rejected"], required: true },
    reasonToJoin: { type: String },
    involvementTimePerWeek: { type: String },
});

export default mongoose.model<UserOpportunityAttributes>("UserOpportunity", userOpportunitySchema);

