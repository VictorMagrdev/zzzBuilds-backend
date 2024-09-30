import express from "express";

import { getAll, getByCharacter } from "../controllers/category.controller.js";

const router = express.Router()

router.get('/', getAll)


export default router;
