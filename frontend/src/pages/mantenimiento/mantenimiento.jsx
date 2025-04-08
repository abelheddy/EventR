import React from 'react';
import { Link } from 'react-router-dom';
import './Maintenance.css';
import logo from '../../assets/eventr-logo.png'; // Asegúrate de tener tu logo en assets

const Maintenance = () => {
  return (
    <div className="maintenance-page">
      <div className="maintenance-container">
        <img src={logo} alt="EVENTR Logo" className="maintenance-logo" />
        
        <h1 className="maintenance-title">EVENTR</h1>
        
        <div className="maintenance-message">
          <p>EVENTR se disculpa,</p>
          <p>por el momento esta función está en</p>
          <p>mantenimiento</p>
        </div>

        <Link to="/" className="home-button">
          Regresar al inicio
        </Link>
      </div>
    </div>
  );
};

export default Maintenance;