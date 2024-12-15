import axios from "axios";
import { Router } from "express";
import { aiEvaluation } from "../controllers/aiEvaluationControllers";

const router = Router();

router.post("/evaluate", aiEvaluation);

export default router;

