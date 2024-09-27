import express from "express";
import { getGrades, deleteGrade } from "../controllers/gradeController.js";

const router = express.Router();

router.get("/:student_id/:class_id", getGrades);

router.delete("/:id", deleteGrade);

export default router;
