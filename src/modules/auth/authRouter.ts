import { Router } from 'express';
import { register } from './authController';

const router: Router = Router();

router.post('/register', register);

export default router;
