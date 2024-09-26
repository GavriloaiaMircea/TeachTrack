import express from "express";
import {
  getStudents,
  addStudent,
  deleteStudent,
} from "../controllers/studentController.js";

const router = express.Router();

router.get("/:class_id", getStudents);

router.post("/:class_id", addStudent);

router.delete("/:class_id/:student_id", deleteStudent);

export default router;
