import { Router } from 'express';
import auth from './modules/auth/authRouter';
import { register } from './modules/auth/authController';
const router: Router = Router();

router.use('/auth', register);

export default router;
