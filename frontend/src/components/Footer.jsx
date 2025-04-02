import React from 'react';
import './Components.css';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer-exact">
      <div className="linea">
      </div>
      
      <div className="footer-content-exact">
        <div className="developer-column">
          <p className="developer-title-exact">Desarrollado por:</p>
          <div className="developer-names-exact">
            <span>Diego Enrique Marques Ludo</span>
            <span>Yael Otamendi Salazar</span>
            <span>Brian Andrei Rosas Mendoza</span>
          </div>
        </div>
        
        <div className="developer-column">
          <p className="developer-title-exact">Mantenimiento realizado por:</p>
          <div className="developer-names-exact">
            <span>Domínguez Bautista Metzli Yunnue</span>
            <span> Espinoza Brindis Jonathan</span>
            <span> Abel Fuentes Guzman</span>
          </div>
        </div>
        
        <div className="social-column">
          <div className="footer-logo">
            <img src={logo} alt="EVENTR Logo" className="logo-img" />
          </div>
          <div className="social-icons">
            <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-copyright-exact">
        <h2> _ </h2>
        <p>&copy; 2025 EVENTR. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;