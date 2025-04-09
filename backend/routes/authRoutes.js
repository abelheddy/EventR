// backend/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const validarCampos = require('../middlewares/validarCampos');
const { register, login, getCurrentUser, verifyAuth  } = require('../controllers/authController');
const authenticate = require('../middlewares/auth');

//ruta de registro de usuario
router.post('/register', [
  check('nombre', 'El nombre es obligatorio').not().isEmpty().trim(),
  check('email', 'Ingresa un email válido').isEmail().normalizeEmail(),
  check('password', 'La contraseña debe tener al menos 6 caracteres').isLength({ min: 6 })
], validarCampos, register);

//Ruta de login
router.post('/login', [
  check('email', 'Ingresa un email válido').isEmail().normalizeEmail(),
  check('password', 'La contraseña es requerida').exists()
], validarCampos, login);

router.get('/me', authenticate, getCurrentUser);

// Agrega esta nueva ruta
router.get('/verify', authenticate, verifyAuth);

module.exports = router;