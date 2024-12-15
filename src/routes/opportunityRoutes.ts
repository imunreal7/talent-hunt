import { Router } from "express";
import {
    createOpportunity,
    getOpportunities,
    updateOpportunity,
    deleteOpportunity,
} from "../controllers/opportunityControllers";

const router = Router();

router.post("/", createOpportunity);
router.get("/", getOpportunities);
router.patch("/:id", updateOpportunity);
router.delete("/:id", deleteOpportunity);

export default router;

