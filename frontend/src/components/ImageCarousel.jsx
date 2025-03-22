import React, { useState } from 'react';
import './Components.css'; // Asegúrate de importar los estilos

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    '/src/assets/images/event1.jpg', // Ruta de la primera imagen
    '/src/assets/images/event2.jpg', // Ruta de la segunda imagen
    '/src/assets/images/event3.jpg', // Ruta de la tercera imagen
    '/src/assets/images/event4.jpg', // Ruta de la cuarta imagen
  ];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={prevImage}>&#10094;</button>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="carousel-image"
      />
      <button className="carousel-button next" onClick={nextImage}>&#10095;</button>
    </div>
  );
};


export default ImageCarousel;