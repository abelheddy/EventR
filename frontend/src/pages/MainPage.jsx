import React from 'react';
import './css/MainPage.css';
import logo from '../assets/logo.png'; // Importa el logo desde la carpeta assets

const MainPage = () => {
    return (
        <>
            <nav>
                <input type="checkbox" id="check" />
                <label htmlFor="check" className="checkbtn">
                    <i className="fas fa-bars"></i> {/* Ícono de hamburguesa */}
                </label>
                <a href="" className="enlace">
                    <img src={logo} alt="Logo" className="logo" /> {/* Logo */}
                </a>
                <ul className="nav-buttons">
                    <li><a className="active" href="#">Inicio</a></li>
                    <li><a href="">Eventos</a></li>
                    <li><a href="#nosotros">Nostoros</a></li>
                    <li><a href="">Contacto</a></li>
                </ul>
                <ul className="auth-buttons">
                    <li><a href="">Login</a></li>
                    <li><a href="">Register</a></li>
                </ul>
            </nav>

            {/* Sección Nosotros */}
            <section id="nosotros" className="nosotros-section">
                <div className="nosotros-container">
                    <h1>Nosotros</h1>
                    <p>
                        Somos una empresa dedicada a ofrecer soluciones innovadoras para nuestros clientes.
                        Nuestra misión es proporcionar servicios de alta calidad que impulsen el éxito de
                        nuestros clientes. Con un equipo comprometido y experto, trabajamos para superar
                        las expectativas y construir relaciones duraderas.
                    </p>
                </div>
            </section>
        </>
    );
};

export default MainPage;