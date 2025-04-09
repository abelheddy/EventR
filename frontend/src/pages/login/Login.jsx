import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './styles/Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
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
        // Guardar token en localStorage
        localStorage.setItem('token', data.token);
        // Guardar datos de usuario
        localStorage.setItem('user', JSON.stringify(data.user));
        // Redirigir al dashboard
        navigate('/dashboard');
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
        <h1 className="logo">EVENTR</h1>
        <p className="welcome-text">
          Bienvenido a Eventr, tu puerta de entrada a un universo de eventos inolvidables. 
          Conéctate con experiencias culturales, musicales, deportivas y mucho más, 
          todo en un solo lugar.
        </p>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
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
          </div>
          
          <div className="form-group">
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
          </div>
          
          <button 
            type="submit" 
            className="login-button"
            disabled={isLoading}
          >
            {isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
          </button>
        </form>
        
        <div className="login-footer">
          <p>¿No tienes una cuenta? <Link to="/register">Regístrate</Link></p>
          <Link to="/forgot-password">¿Olvidaste tu contraseña?</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;