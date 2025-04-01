import React from 'react';
import { Link } from 'react-router-dom';
import './Components.css';
import logo from '../assets/logo.png';

const Header = ({ isLoggedIn, username }) => {
  return (
    <header className="header">
      <nav className="nav-container">
        {/* Logo */}
        <Link to="/" className="logo-link">
          <img src={logo} alt="Logo" className="logo" />
        </Link>

        {/* Barra de búsqueda */}
        <div className="search-container">
          <input type="text" placeholder="Buscar..." className="search-input" />
          <button className="search-button">
            <i className="fas fa-search"></i>
          </button>
        </div>

        {/* Menú de navegación */}
        <ul className="nav-menu">
          <li><Link to="/destacados" className="nav-link">Destacados</Link></li>
          <li><Link to="/contacto" className="nav-link">Contacto</Link></li>
        </ul>

        {/* Sección de usuario */}
        <div className="user-section">
          {isLoggedIn ? (
            <>
              <button className="logout-button">Cerrar sesión</button>
              <span className="username">{username}</span>
            </>
          ) : (
            <>
              <Link to="/login" className="auth-link">Iniciar sesión</Link>
              <Link to="/register" className="auth-link">Registrarse</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;