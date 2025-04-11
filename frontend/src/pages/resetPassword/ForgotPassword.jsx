import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/forgotPassword.css';
import logo from '../../assets/logo.png';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!email) {
      setError('El email es requerido');
      return;
    }
    
    if (!email.match(/^\S+@\S+\.\S+$/)) {
      setError('Email inválido');
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Simulamos una llamada a la API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // En un caso real, aquí harías la llamada a tu backend:
      /*
      const response = await fetch('http://localhost:5000/api/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Error al solicitar recuperación');
      }
      */
      
      setSuccess(true);
    } catch (err) {
      console.error('Error:', err);
      setError(err.message || 'Error al procesar la solicitud');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="forgot-container">
      <div className="forgot-card">
        <div className="forgot-left-column">
          <img src={logo} alt="Eventr Logo" className="forgot-logo" />
          <h1 className="logo">EVENTR</h1>
          <p className="welcome-text">
            Recupera el acceso a tu cuenta y vuelve a disfrutar de todos los eventos 
            que tenemos preparados para ti.
          </p>
        </div>
        
        <div className="forgot-right-column">
          {error && <div className="error-message">{error}</div>}
          
          {success ? (
            <div className="success-message">
              <h3>¡Correo enviado!</h3>
              <p>
                Hemos enviado un enlace de recuperación a <strong>{email}</strong>.
                Por favor revisa tu bandeja de entrada y sigue las instrucciones.
              </p>
              <Link to="/login" className="back-to-login">
                Volver al inicio de sesión
              </Link>
            </div>
          ) : (
            <>
              <h2>Recuperar contraseña</h2>
              <p className="instructions">
                Ingresa tu dirección de correo electrónico y te enviaremos un enlace 
                para restablecer tu contraseña.
              </p>
              
              <form onSubmit={handleSubmit} className="forgot-form">
                <div className="form-group">
                  <label htmlFor="email">Correo electrónico</label>
                  <input 
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    required
                  />
                </div>
                
                <button 
                  type="submit" 
                  className={`forgot-button ${isLoading ? 'loading' : ''}`}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <span className="spinner"></span>
                      Enviando...
                    </>
                  ) : (
                    'Enviar enlace'
                  )}
                </button>
              </form>
              
              <div className="forgot-footer">
                <Link to="/login" className="back-to-login">
                  ← Volver al inicio de sesión
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;