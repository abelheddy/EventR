import React from 'react';
import './Components.css'; // Asegúrate de crear este archivo para los estilos

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>EVENTR</h1>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/events">Eventos</a></li>
          <li><a href="/about">Acerca de</a></li>
          <li><a href="/contact">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;