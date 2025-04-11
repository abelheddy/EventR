// En tu contactoController.js
import Contacto from '../models/Contacto.js';

export const crearContacto = async (req, res) => {
  try {
    const { nombre, email, mensaje } = req.body;
    
    if (!nombre || !email || !mensaje) {
      return res.status(400).json({ message: 'Todos los campos son requeridos' });
    }
    
    const contactoId = await Contacto.create({ nombre, email, mensaje });
    
    res.status(201).json({ 
      success: true,
      message: 'Mensaje recibido, gracias por contactarnos'
    });
  } catch (error) {
    res.status(500).json({ message: 'Error al procesar tu mensaje' });
  }
};