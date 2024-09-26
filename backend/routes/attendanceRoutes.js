import express from "express";
import {
  delteAttendance,
  getAttendance,
} from "../controllers/attendanceController.js";

const router = express.Router();

router.get("/:student_id/:class_id", getAttendance);

router.delete("/:id", delteAttendance);

export default router;
