import express from "express";
import {
  getGrades,
  deleteGrade,
  addGrade,
  getGradeById,
  updateGrade,
} from "../controllers/gradeController.js";

const router = express.Router();

router.get("/:student_id/:class_id", getGrades);

router.delete("/:id", deleteGrade);

router.post("/:student_id/:class_id", addGrade);

router.get("/:id", getGradeById);

router.put("/:id", updateGrade);

export default router;
