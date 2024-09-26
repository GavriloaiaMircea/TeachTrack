import express from "express";
import { getStudents, addStudent } from "../controllers/studentController.js";

const router = express.Router();

router.get("/:class_id", getStudents);

router.post("/:class_id", addStudent);

export default router;
