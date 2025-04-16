const LocationSection = ({ location }) => {
    return (
      <div>
        <h2 className="location-title">Ubicación del Evento</h2>
        <div className="map-container">
          <div className="map-content">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="map-icon"
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <p className="map-address">{location.address}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default LocationSection;