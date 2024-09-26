import express, { Router } from "express";
import { getAttendance } from "../controllers/attendanceController.js";

const router = express.Router();

router.get("/:student_id/:class_id", getAttendance);

export default router;
