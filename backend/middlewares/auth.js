const { verifyToken } = require('../helpers/jwt');

const authenticate = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ 
        success: false,
        message: 'Acceso no autorizado. Token requerido.' 
      });
    }

    const decoded = verifyToken(token);
    req.user = { id: decoded.id };
    next();

  } catch (error) {
    res.status(401).json({ 
      success: false,
      message: 'Acceso no autorizado. Token inválido.' 
    });
  }
};

module.exports = authenticate;