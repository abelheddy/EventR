const EventSection = ({ eventData, isDescriptionOpen, setIsDescriptionOpen }) => {
    return (
      <div className="event-container">
        {/* Imagen del evento */}
        <div className="event-image-container">
          <img 
            src={eventData.eventImage} 
            alt={eventData.title} 
            className="event-image"
          />
          <button className="share-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fdfdfd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="5" r="3"></circle>
              <circle cx="6" cy="12" r="3"></circle>
              <circle cx="18" cy="19" r="3"></circle>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
            </svg>
          </button>
        </div>
        
        {/* Detalles del evento */}
        <div className="event-details">
          <h2 className="event-title">{eventData.title}</h2>
          <p className="event-subtitle">{eventData.subtitle}</p>
          
          <div className="price-date-container">
            <span className="event-price">{eventData.price}</span>
            <span className="event-date">{eventData.date}</span>
          </div>
          
          <button className="buy-button">
            Comprar Boletos
          </button>
          
          {/* Descripción desplegable */}
          <div className="description-container">
            <button 
              onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
              className="description-toggle"
            >
              <span>Descripción del Evento</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                style={{ transform: isDescriptionOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            
            {isDescriptionOpen && (
              <div className="description-content">
                <p>{eventData.description}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default EventSection;