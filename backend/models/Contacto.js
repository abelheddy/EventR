import pool from '../config/db.js';

class Contacto {
  static async create({ nombre, email, mensaje }) {
    const [result] = await pool.execute(
      'INSERT INTO contactos (nombre, email, mensaje) VALUES (?, ?, ?)',
      [nombre, email, mensaje]
    );
    return result.insertId;
  }
}

export default Contacto;