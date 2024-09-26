import express from "express";
import {
  delteAttendance,
  getAttendance,
  addAttendance,
} from "../controllers/attendanceController.js";

const router = express.Router();

router.get("/:student_id/:class_id", getAttendance);

router.delete("/:id", delteAttendance);

router.post("/:student_id/:class_id", addAttendance);

export default router;
