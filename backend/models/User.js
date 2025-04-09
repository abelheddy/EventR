const db = require('../config/db');
const bcrypt = require('bcryptjs');

class User {
  static async create({ nombre, email, password }) {
    // Hash de la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const [result] = await db.execute(
      'INSERT INTO usuarios (nombre, correo, contrasena) VALUES (?, ?, ?)',
      [nombre, email, hashedPassword]
    );
    
    return result.insertId;
  }

  static async findByEmail(email) {
    const [rows] = await db.execute(
      'SELECT * FROM usuarios WHERE correo = ?',
      [email]
    );
    return rows[0];
  }
}

module.exports = User;