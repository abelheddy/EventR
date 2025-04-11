import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './styles/Login.css';
import logo from '../../assets/logo.png';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

  const [submitError, setSubmitError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Redirección si viene del registro
  const registrationSuccess = location.state?.registrationSuccess;
  const registeredEmail = location.state?.email;

  const from = location.state?.from?.pathname || '/';

  useEffect(() => {
    if (isAuthenticated) {
      navigate(from, { replace: true });
    }

    // Autocompletar email si viene del registro
    if (registrationSuccess && registeredEmail) {
      setFormData(prev => ({ ...prev, email: registeredEmail }));
    }
  }, [isAuthenticated, navigate, from, registrationSuccess, registeredEmail]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Limpiar errores al escribir
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    if (submitError) setSubmitError('');
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'El email es requerido';
    } else if (!formData.email.match(/^\S+@\S+\.\S+$/)) {
      newErrors.email = 'Email inválido';
    }
    
    if (!formData.password) {
      newErrors.password = 'La contraseña es requerida';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');

    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Manejar errores específicos del backend
        if (data.message.includes('Credenciales')) {
          setSubmitError('Email o contraseña incorrectos');
        } else {
          setSubmitError(data.message || 'Error al iniciar sesión');
        }
        return;
      }

      // Login exitoso
      login(data.token, data.user);
      navigate(from, { replace: true });
    } catch (err) {
      console.error('Login error:', err);
      setSubmitError('Error de conexión con el servidor');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-left-column">
          <img src={logo} alt="Eventr Logo" className="login-logo" />
          <h1 className="logo">EVENTR</h1>
          <p className="welcome-text">
            Bienvenido a Eventr, tu puerta de entrada a un universo de eventos inolvidables. 
            Conéctate con experiencias culturales, musicales, deportivas y mucho más, 
            todo en un solo lugar.
          </p>
        </div>
        
        <div className="login-right-column">
          {registrationSuccess && (
            <div className="success-message">
              ¡Registro exitoso! Por favor inicia sesión.
            </div>
          )}

          {submitError && (
            <div className="error-message">{submitError}</div>
          )}

          <form onSubmit={handleSubmit} className="login-form">
            <div className={`form-group ${errors.email ? 'error' : ''}`}>
              <label htmlFor="email">Correo electrónico</label>
              <input 
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                required
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>
            
            <div className={`form-group ${errors.password ? 'error' : ''}`}>
              <label htmlFor="password">Contraseña</label>
              <input 
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
              />
              {errors.password && <span className="error-text">{errors.password}</span>}
            </div>
            
            <button 
              type="submit" 
              className={`login-button ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="spinner"></span>
                  Iniciando sesión...
                </>
              ) : (
                'Iniciar sesión'
              )}
            </button>
          </form>
          
          <div className="login-footer">
            <p>¿No tienes una cuenta? <Link to="/register">Regístrate</Link></p>
            <Link to="/Reset-Password">¿Olvidaste tu contraseña?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;