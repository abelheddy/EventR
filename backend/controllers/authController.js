const User = require('../models/User');

const register = async (req, res) => {
  try {
    const { nombre, email, password } = req.body;

    // Validaciones básicas
    if (!nombre || !email || !password) {
      return res.status(400).json({ message: 'Todos los campos son requeridos' });
    }

    // Verificar si el usuario ya existe
    const existingUser = await User.findByEmail(email);
    if (existingUser) {
      return res.status(409).json({ message: 'El correo ya está registrado' });
    }

    // Crear nuevo usuario
    const userId = await User.create({ nombre, email, password });
    
    res.status(201).json({ 
      message: 'Usuario registrado exitosamente',
      user: { id: userId, nombre, email }
    });

  } catch (error) {
    console.error('Error en el registro:', error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

module.exports = { register };