const GallerySection = ({ images }) => {
    return (
      <div>
        <h2 className="gallery-title">Galería del Evento</h2>
        <div className="gallery-grid">
          {images.map((img, index) => (
            <div key={index} className="gallery-item">
              <img 
                src={img} 
                alt={`Imagen ${index + 1} del evento`} 
                className="gallery-image"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default GallerySection;