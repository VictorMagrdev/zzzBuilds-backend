import express from 'express';

import { getUserById } from '../controllers/user.controller';

const router = express.Router()

router.get('/:id_user', getUserById)
