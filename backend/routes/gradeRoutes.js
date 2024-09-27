import express from "express";
import { getGrades } from "../controllers/gradeController.js";

const router = express.Router();

router.get("/:student_id/:class_id", getGrades);

export default router;
