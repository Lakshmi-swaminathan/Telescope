// routes/userRoutes.js
import express from 'express';
const router = express.Router();
import { createUser, loginUser } from '../controllers/userController.mjs';

router.post('/create-user', createUser);
router.post('/login-user', loginUser);

export default router;
