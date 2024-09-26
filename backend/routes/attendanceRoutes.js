import express from "express";
import {
  delteAttendance,
  getAttendance,
  addAttendance,
  getAttendanceById,
  updateAttendance,
} from "../controllers/attendanceController.js";

const router = express.Router();

router.get("/:student_id/:class_id", getAttendance);

router.delete("/:id", delteAttendance);

router.post("/:student_id/:class_id", addAttendance);

router.get("/:id", getAttendanceById);

router.put("/", updateAttendance);

export default router;
