import React from 'react';
import { Link } from 'react-router-dom';
import './Components.css'; // ← Asegúrate que esta ruta es correcta
import logo from '../assets/logo.png'; // ← Verifica también esta ruta

const Header = () => {
  return (
    <header className="header">
      <nav>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <i className="fas fa-bars"></i>
        </label>
        
        <Link to="/" className="enlace">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        
        <div className="menu-container">
          <ul className="nav-buttons">
            <li><Link to="/" className="active">Inicio</Link></li>
            <li><Link to="/eventos">Eventos</Link></li>
            <li><a href="#nosotros">Nosotros</a></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
          
          <ul className="auth-buttons">
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;