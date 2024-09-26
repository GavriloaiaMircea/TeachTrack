import express from "express";
import { getStudents } from "../controllers/studentController.js";

const router = express.Router();

router.get("/:class_id", getStudents);

export default router;
