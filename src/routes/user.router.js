import express from 'express';

import { getUserById, registerUser, loginUser, getUserProfile, verifyToken } from '../controllers/user.controller.js';

const router = express.Router()

router.get('/profile', verifyToken, getUserProfile)
router.get('/:id_user', getUserById)
router.post('/login', loginUser)
router.post('/register', registerUser)

export default router;