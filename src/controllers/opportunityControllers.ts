import { Request, Response } from "express";
import Opportunity from "../models/Opportunity";

// Create a Opportunity
export const createOpportunity = async (req: Request, res: Response) => {
    try {
        const opportunity = await Opportunity.create(req.body);
        res.status(201).json(opportunity);
    } catch (error) {
        res.status(500).json({ error });
    }
};

// Get all Opportunitys
export const getOpportunities = async (req: Request, res: Response) => {
    try {
        const opportunitys = await Opportunity.find();
        res.status(200).json(opportunitys);
    } catch (error) {
        res.status(500).json({ error });
    }
};

// Update Opportunity
export const updateOpportunity = async (req: Request, res: Response) => {
    try {
        const opportunity = await Opportunity.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.status(200).json(opportunity);
    } catch (error) {
        res.status(500).json({ error });
    }
};

// Delete Opportunity
export const deleteOpportunity = async (req: Request, res: Response) => {
    try {
        await Opportunity.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error });
    }
};

