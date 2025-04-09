import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './styles/Login.css'; // Asegúrate de tener este archivo CSS para los estilos
import logo from '../../assets/logo.png';


const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  useEffect(() => {
    if (isAuthenticated) {
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, from]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        login(data.token, data.user);
      } else {
        setError(data.message || 'Credenciales incorrectas');
      }
    } catch (err) {
      setError('Error al conectar con el servidor');
      console.error('Login error:', err);
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
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <input 
                type="email" 
                id="email" 
                placeholder="tu@email.com" 
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input 
                type="password" 
                id="password" 
                placeholder="••••••••" 
                required 
              />
            </div>
            
            <button type="submit" className="login-button">Iniciar sesión</button>
          </form>
          
          <div className="login-footer">
            <p>¿No tienes una cuenta? <a href="/register">Regístrate</a></p>
            <a href="/forgot-password">¿Olvidaste tu contraseña?</a>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Login;