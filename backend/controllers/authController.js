const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { generateToken } = require('../helpers/jwt'); // Opcional para JWT
//const { sendWelcomeEmail } = require('../helpers/email'); // Opcional para emails

const register = async (req, res) => {
  try {
    const { nombre, email, password } = req.body;

    // 1. Verificar si el usuario ya existe (redundante si usas express-validator)
    const existingUser = await User.findByEmail(email);
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: 'El correo electrónico ya está registrado',
        field: 'email'
      });
    }

    // 2. Hash de la contraseña
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 3. Crear el usuario en la base de datos
    const newUser = await User.create({
      nombre,
      email,
      password: hashedPassword
    });

    // 4. Generar token JWT (opcional)
    const token = generateToken(newUser.id);

    // 5. Enviar email de bienvenida (opcional)
    //await sendWelcomeEmail(email, nombre);

    // 6. Responder sin enviar datos sensibles
    res.status(201).json({
      success: true,
      message: 'Usuario registrado exitosamente',
      user: {
        id: newUser.id,
        nombre: newUser.nombre,
        email: newUser.email,
        createdAt: newUser.fecha_creacion
      },
      token // Opcional
    });

  } catch (error) {
    console.error('Error en el registro:', error);
    res.status(500).json({
      success: false,
      message: 'Error en el servidor al registrar usuario',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

// Función de login (adicional por si la necesitas)
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Verificar si el usuario existe
    const user = await User.findByEmail(email);
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Credenciales inválidas',
        field: 'email'
      });
    }

    // 2. Comparar contraseñas
    const isMatch = await bcrypt.compare(password, user.contraseña);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Credenciales inválidas',
        field: 'password'
      });
    }

    // 3. Generar token JWT
    const token = generateToken(user.id);

    // 4. Responder sin datos sensibles
    res.json({
      success: true,
      message: 'Inicio de sesión exitoso',
      user: {
        id: user.id,
        nombre: user.nombre,
        email: user.email
      },
      token
    });

  } catch (error) {
    console.error('Error en el login:', error);
    res.status(500).json({
      success: false,
      message: 'Error en el servidor al iniciar sesión',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

// Función para obtener usuario actual (opcional)
const getCurrentUser = async (req, res) => {
  try {
    // El usuario viene del middleware de autenticación
    const user = await User.findById(req.user.id);
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'Usuario no encontrado'
      });
    }

    res.json({
      success: true,
      user: {
        id: user.id,
        nombre: user.nombre,
        email: user.email,
        createdAt: user.fecha_creacion
      }
    });

  } catch (error) {
    console.error('Error al obtener usuario:', error);
    res.status(500).json({
      success: false,
      message: 'Error en el servidor al obtener usuario'
    });
  }
};

module.exports = {
  register,
  login,
  getCurrentUser
};