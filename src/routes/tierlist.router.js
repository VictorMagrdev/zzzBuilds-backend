import express from 'express';
import { getAll, getById } from '../controllers/tierlist.controller';

const router = express.Router();

router.get('/', getAll)
router.get('/:id_tierlist', getById)


export default router;