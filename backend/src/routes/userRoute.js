import Router from 'express';
import { register, login, auth } from '../controllers/userController.js';

const router = Router();

router.post('/auth/register', register);
router.post('/auth/login', login);
router.get('/auth', auth);

export default router;