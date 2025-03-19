import React from 'react';
import './Components.css'; // Asegúrate de crear este archivo para los estilos

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2023 EVENTR. Todos los derechos reservados.</p>
      <nav className="footer-nav">
        <ul>
          <li><a href="/privacy">Política de Privacidad</a></li>
          <li><a href="/terms">Términos de Servicio</a></li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;