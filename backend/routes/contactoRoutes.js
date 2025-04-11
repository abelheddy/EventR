import express from 'express';
import { crearContacto } from '../controllers/contactoController.js';

const router = express.Router();

router.post('/', crearContacto);

export default router;