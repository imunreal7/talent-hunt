import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes";
import opportunityRoutes from "./routes/opportunityRoutes";
import userOpportunityRoutes from "./routes/userOpportunityRoutes";
import aiRoutes from "./routes/aiRoutes";

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/opportunities", opportunityRoutes);
app.use("/api/userOpportunities", userOpportunityRoutes);
app.use("/api/ai", aiRoutes);

// MongoDB Connection
mongoose
    .connect("mongodb://localhost:27017/talentHunt", {})
    .then(() => console.log("MongoDB Connected"))
    .catch((error) => console.error("MongoDB connection error:", error));

// Export app
export default app;

