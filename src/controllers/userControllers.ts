import { Request, Response } from "express";
import User from "../models/User";

// Create a User
export const createUser = async (req: Request, res: Response) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error });
    }
};

// Get all Users
export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error });
    }
};

// Get a User
export const getUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error });
    }
};

// Update User
export const updateUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error });
    }
};

// Delete User
export const deleteUser = async (req: Request, res: Response) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(204).json({ message: "User deleted" });
    } catch (error) {
        res.status(500).json({ error });
    }
};

