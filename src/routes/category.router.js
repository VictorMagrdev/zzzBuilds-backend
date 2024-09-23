import express from "express";

import { getAll } from "../controllers/category.controller.js";

const router = express.Router()

router.get('/', getAll)

export default router;
