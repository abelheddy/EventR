import React from 'react'
import './styles/Login.css'

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Lógica de login aquí
    console.log('Formulario enviado')
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="logo">EVENTR</h1>
        <p className="welcome-text">
          Bienvenido a Eventr, tu puerta de entrada a un universo de eventos inolvidables. 
          Conéctate con experiencias culturales, musicales, deportivas y mucho más, 
          todo en un solo lugar.
        </p>
        
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
  )
}

export default Login