import { Router } from "express";
import {
    applyForOpportunity,
    getUserApplications,
    updateUserOpportunity,
    deleteUserOpportunity,
} from "../controllers/userOpportunityController";

const router = Router();

router.post("/", applyForOpportunity);
router.get("/user/:id", getUserApplications);
router.patch("/:id", updateUserOpportunity);
router.delete("/:id", deleteUserOpportunity);

export default router;

