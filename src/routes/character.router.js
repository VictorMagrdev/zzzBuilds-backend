import express from 'express';

import { getAll, getByCharacter } from '../controllers/character.controller.js';

const router = express.Router()

router.get('/', getAll)
router.get('/:id_character', getByCharacter)

export default router;