import { Router } from 'express';
import authRoutes from './authRoutes.js';
import contactoRoutes from './contactoRoutes.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/contacto', contactoRoutes);

export default router;