import {
  getClasses,
  createClass,
  deleteClass,
} from "../controllers/classController.js";
import express from "express";

const router = express.Router();

router.get("/:teacher_id", getClasses);

router.post("/", createClass);

router.delete("/:class_id", deleteClass);

export default router;
