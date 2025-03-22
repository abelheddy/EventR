import React from 'react';
import './css/MainPage.css';

const MainPage = () => {
    return (
        <nav>
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="checkbtn">
                <i className="fas fa-bars"></i>
            </label>
            <a href="#" className="enlace">
                <img src="logo.png" alt="" className="logo" />
            </a>
            <ul>
                <li><a className="active" href="#">Inicio</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Servicios</a></li>
                <li><a href="#">Portafolio</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </nav>
    );
};

export default MainPage;