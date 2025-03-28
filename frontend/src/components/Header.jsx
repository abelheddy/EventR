import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import './Components.css';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <i className="fas fa-bars"></i>
        </label>
        <Link to="/" className="enlace"> {/* Cambia a Link */}
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <ul className="nav-buttons">
          <li><Link to="/" className="active">Inicio</Link></li> {/* Cambia a Link */}
          <li><Link to="/eventos">Eventos</Link></li> {/* Ejemplo de ruta */}
          <li><a href="#nosotros">Nosotros</a></li> {/* Se mantiene como anchor para scroll */}
          <li><Link to="/contacto">Contacto</Link></li> {/* Ejemplo de ruta */}
        </ul>
        <ul className="auth-buttons">
          <li><Link to="/login">Login</Link></li> {/* Cambia a Link */}
          <li><Link to="/register">Register</Link></li> {/* Ejemplo de ruta */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;