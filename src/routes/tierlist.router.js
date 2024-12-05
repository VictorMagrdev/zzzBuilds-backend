import express from 'express';
import { getAll, getById, create } from '../controllers/tierlist.controller.js';
import { verifyToken } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/', getAll)
router.get('/:id_tierlist', getById)
router.post('/',verifyToken, create)


export default router;
