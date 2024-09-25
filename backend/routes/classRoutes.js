import { getClasses } from "../controllers/classController.js";
import express from "express";

const router = express.Router();

router.get("/:teacher_id", getClasses);

export default router;
