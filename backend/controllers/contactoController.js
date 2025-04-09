// En tu contactoController.js
export const crearContacto = async (req, res) => {
    try {
      const { nombre, email, mensaje } = req.body;
      
      // Validaciones básicas
      if (!nombre || !email || !mensaje) {
        return res.status(400).json({ message: 'Todos los campos son requeridos' });
      }
      
      // Insertar en la base de datos
      const [result] = await pool.execute(
        'INSERT INTO contactos (nombre, email, mensaje) VALUES (?, ?, ?)',
        [nombre, email, mensaje]
      );
      
      // Opcional: Enviar correo electrónico de confirmación
      
      res.status(201).json({ message: 'Mensaje recibido, gracias por contactarnos' });
    } catch (error) {
      console.error('Error al guardar contacto:', error);
      res.status(500).json({ message: 'Error al procesar tu mensaje' });
    }
  }; 