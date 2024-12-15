import { Request, Response } from "express";
import UserOpportunity from "../models/UserOpportunity";

// Create a UserOpportunity
export const applyForOpportunity = async (req: Request, res: Response) => {
    try {
        const userOpportunity = await UserOpportunity.create(req.body);
        res.status(201).json(userOpportunity);
    } catch (error) {
        res.status(500).json({ error });
    }
};

// Get all UserOpportunitys
export const getUserApplications = async (req: Request, res: Response) => {
    try {
        const userOpportunities = await UserOpportunity.find({ member: req.params.id });
        res.status(200).json(userOpportunities);
    } catch (error) {
        res.status(500).json({ error });
    }
};

// Update UserOpportunity
export const updateUserOpportunity = async (req: Request, res: Response) => {
    try {
        const userOpportunity = await UserOpportunity.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.status(200).json(userOpportunity);
    } catch (error) {
        res.status(500).json({ error });
    }
};

// Delete UserOpportunity
export const deleteUserOpportunity = async (req: Request, res: Response) => {
    try {
        await UserOpportunity.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error });
    }
};

