export const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Error interno del servidor';
    
    res.status(statusCode).json({
      success: false,
      status: statusCode,
      message: message,
      stack: process.env.NODE_ENV === 'development' ? err.stack : {}
    });
  };
  
  export const notFound = (req, res, next) => {
    const error = new Error(`No encontrado - ${req.originalUrl}`);
    res.status(404);
    next(error);
  };
  
  export default {
    errorHandler,
    notFound
  };