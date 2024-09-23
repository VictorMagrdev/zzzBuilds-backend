import express from 'express';

import { getAll, getByCategory } from '../controllers/items.controller.js';

const router = express.Router()

router.get('/', getAll)
router.get('/:id_category', getByCategory)

export default router;
