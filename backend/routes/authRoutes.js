// backend/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const validarCampos = require('../middlewares/validarCampos');
const { register } = require('../controllers/authController');

router.post('/register', [
  check('nombre', 'El nombre es obligatorio').not().isEmpty().trim(),
  check('email', 'Ingresa un email válido').isEmail().normalizeEmail(),
  check('password', 'La contraseña debe tener al menos 6 caracteres').isLength({ min: 6 })
], validarCampos, register);

module.exports = router;