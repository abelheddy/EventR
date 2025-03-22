import React from 'react';
import './css/MainPage.css';

const MainPage = () => {
    return (
        <>
            <nav>
                <input type="checkbox" id="check" />
                <label htmlFor="check" className="checkbtn">
                    <i className="fas fa-bars"></i> {/* Ícono de hamburguesa */}
                </label>
                <a href="#" className="enlace">
                    <img src="logo.png" alt="Logo" className="logo" /> {/* Logo */}
                </a>
                <ul className="nav-buttons">
                    <li><a className="active" href="#">Inicio</a></li>
                    <li><a href="#">Eventos</a></li>
                    <li><a href="#">Acerca de</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
                <ul className="auth-buttons">
                    <li><a href="/login">Login</a></li>
                    <li><a href="/register">Register</a></li>
                </ul>
            </nav>

            {/* Contenido principal */}
            <section>
                <div className="content">
                    <div className="left-section">Sección Izquierda</div>
                    <div className="right-section">Sección Derecha</div>
                </div>
            </section>
        </>
    );
};

export default MainPage;