import React from 'react';
import './css/MainPage.css';
import logo from '../assets/logo.png'; // Importa el logo desde la carpeta assets
import imagenDerecha from '../assets/imagen-derecha.jpg'; 
import ImageCarousel from '../components/ImageCarousel';

const MainPage = () => {
    return (
        <>


            {/* Carrusel más grande */}
            <div className="carrusel-grande">
                <ImageCarousel />
            </div>

            {/* Sección de texto e imagen */}
            <div className="texto-imagen-section">
                <div className="texto-izquierda">
                    <h1>Vende tus boletos en EventR</h1>
                </div>
                <div className="imagen-derecha">
                    <img src={imagenDerecha} alt="Imagen derecha" />
                </div>
            </div>

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