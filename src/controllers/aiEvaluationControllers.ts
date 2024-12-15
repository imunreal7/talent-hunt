import axios from "axios";
import { Request, Response } from "express";

// Create a User
export const aiEvaluation = async (req: Request, res: Response) => {
    const { userData, opportunityData } = req.body;

    try {
        // Calculate skills overlap
        const skillsOverlap = userData.skills.filter((skill: any) =>
            opportunityData.skills.includes(skill),
        ).length;

        // Title match (boolean to number)
        const titleMatch = userData.professionalTitle === opportunityData.professionalTitle ? 1 : 0;

        // Call AI model API
        const response = await axios.post("http://localhost:5000/predict", {
            skillsOverlap,
            titleMatch,
        });
        const matchPercentage = response.data.matchPercentage;

        // Generate simple evaluation text
        const evaluation =
            matchPercentage > 80
                ? "Excellent fit for this opportunity."
                : "Partial match; some skills or title are missing.";

        // Generate justification text
        const justification = `The match percentage is ${matchPercentage}% because ${
            skillsOverlap > 0
                ? `${skillsOverlap} skill(s) matched between the user and opportunity.`
                : "no skills matched."
        } ${titleMatch === 1 ? "The professional title also matches." : "The professional title does not match."}`;

        res.json({ matchPercentage, evaluation, justification });
    } catch (error: any) {
        res.status(500).json({ error: "AI evaluation failed", details: error.message });
    }
};

