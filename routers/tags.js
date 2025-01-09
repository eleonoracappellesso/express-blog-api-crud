import express from "express";
const router = express.Router();

import { index } from "../controllers/ingredientsController.js";


// Index - Read all
router.get("/", index);

export default router;