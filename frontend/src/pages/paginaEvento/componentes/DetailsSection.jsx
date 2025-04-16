const DetailsSection = ({ eventData }) => {
    return (
      <div className="details-grid">
        <div>
          <h2 className="details-title">Detalles del Evento</h2>
          <div className="details-content">
            <div className="detail-item">
              <h3 className="detail-label">Nombre</h3>
              <p>{eventData.title}</p>
            </div>
            <div className="detail-item">
              <h3 className="detail-label">Fecha</h3>
              <p>{eventData.date}</p>
            </div>
            <div className="detail-item">
              <h3 className="detail-label">Descripción</h3>
              <p>{eventData.description}</p>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="details-title">Recomendaciones</h2>
          <p style={{ whiteSpace: 'pre-line' }}>{eventData.recommendations}</p>
        </div>
      </div>
    );
  };
  
  export default DetailsSection;