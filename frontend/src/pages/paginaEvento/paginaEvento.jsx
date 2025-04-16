import { useState } from 'react';
import EventSection from './componentes/EventSection';
import GallerySection from './componentes/GallerySection';
import LocationSection from './componentes/LocationSection';
import DetailsSection from './componentes/DetailsSection';
import './css/paginaEvento.css';

const EventPage = () => {
  const [activeTab, setActiveTab] = useState('evento');
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  // Datos del evento con rutas correctas a las imágenes
  const eventData = {
    title: "Festival Gastronómico",
    subtitle: "Sabores del Mundo",
    date: "2023-11-20",
    price: "$30",
    description: "Un evento que reúne a los mejores chefs internacionales para ofrecer una experiencia culinaria única. Disfruta de platillos de 15 países diferentes en un solo lugar.",
    recommendations: "Recomendaciones para los asistentes:\n\n- Llegar con 30 minutos de anticipación\n- Vestimenta casual elegante\n- Traer identificación oficial\n- No se permiten mascotas",
    location: {
      lat: 19.4326,
      lng: -99.1332,
      address: "Parque Central"
    },
    galleryImages: [
      "/images/imagen1.jpg",
      "/images/imagen2.jpg",
      "/images/imagen3.jpg",
      "/images/imagen4.jpg"
    ],
    heroImage: "/images/food-festival.jpg",
    eventImage: "/images/imagen1.jpg" // Usamos la primera imagen como principal
  };

  return (
    <div className="event-page">
      {/* Hero Section */}
      <div className="hero-section">
        <img 
          src={eventData.heroImage} 
          alt="Festival Gastronómico" 
          className="hero-image"
        />
        <div className="hero-content">
          <h1>{eventData.title}</h1>
          <p>{eventData.date}</p>
        </div>
      </div>

      {/* Navegación */}
      <div className="nav-tabs">
        <div className="tab-container">
          {['evento', 'galería', 'ubicación', 'detalles'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Contenido */}
      <main className="main-content">
        {activeTab === 'evento' && (
          <EventSection 
            eventData={eventData} 
            isDescriptionOpen={isDescriptionOpen}
            setIsDescriptionOpen={setIsDescriptionOpen}
          />
        )}
        
        {activeTab === 'galería' && <GallerySection images={eventData.galleryImages} />}
        
        {activeTab === 'ubicación' && <LocationSection location={eventData.location} />}
        
        {activeTab === 'detalles' && <DetailsSection eventData={eventData} />}
      </main>
    </div>
  );
};

export default EventPage;