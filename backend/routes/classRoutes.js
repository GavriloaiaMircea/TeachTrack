import {
  getClasses,
  createClass,
  deleteClass,
  updateClass,
  getClassById,
  searchClasses,
} from "../controllers/classController.js";
import express from "express";

const router = express.Router();

router.get("/:teacher_id", getClasses);

router.post("/", createClass);

router.delete("/:class_id", deleteClass);

router.put("/", updateClass);

router.get("/getClass/:class_id", getClassById);

router.get("/search/:teacher_id", searchClasses);

export default router;
