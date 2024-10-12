import express from 'express';

import { getUserById, registerUser, loginUser, getUserProfile, verifyToken } from '../controllers/user.controller.js';

const router = express.Router()

router.get('/:id_user', getUserById)
router.post('/login', loginUser)
router.post('/register', registerUser)
router.get('/profile', verifyToken, getUserProfile)

export default router;