import { getClasses, createClass } from "../controllers/classController.js";
import express from "express";

const router = express.Router();

router.get("/:teacher_id", getClasses);
router.post("/", createClass);

export default router;
