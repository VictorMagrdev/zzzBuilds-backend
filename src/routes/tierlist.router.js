import express from 'express';
import { getAll, getById, create } from '../controllers/tierlist.controller.js';

const router = express.Router();

router.get('/', getAll)
router.get('/:id_tierlist', getById)
router.post('/', create)


export default router;
