import mongoose, { Schema, Document } from "mongoose";
import { UserAttributes, SkillAttributes, TribeAttributes } from "./User";

export interface OpportunityAttributes extends Document {
    name: string;
    originalCreator: UserAttributes;
    type: "Opportunity" | "Project" | "Story";
    category: "OpenEnded" | "ClearDeliverable";
    cause?: string[];
    operationalGoal?: string;
    shortDescription?: string;
    longDescription?: string;
    skills?: SkillAttributes[];
    tribes?: TribeAttributes[];
}

const opportunitySchema: Schema = new Schema({
    name: { type: String, required: true },
    originalCreator: { type: Schema.Types.ObjectId, ref: "User", required: true },
    type: { type: String, enum: ["Opportunity", "Project", "Story"], required: true },
    category: { type: String, enum: ["OpenEnded", "ClearDeliverable"], required: true },
    cause: [String],
    operationalGoal: { type: String },
    shortDescription: { type: String },
    longDescription: { type: String },
    skills: [{ name: { type: String }, level: { type: String } }],
    tribes: [{ name: { type: String } }],
});

export default mongoose.model<OpportunityAttributes>("Opportunity", opportunitySchema);

