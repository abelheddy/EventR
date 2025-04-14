// EventForm.tsx
import { useState } from 'react';
import './css/FormularioEventos.css'; // Archivo CSS para los estilos

const EventForm = () => {
  const [formData, setFormData] = useState({
    eventName: '',
    description: '',
    eventType: '',
    date: '',
    time: '',
    location: '',
    organizer: '',
    category: '',
    price: '',
    capacity: '',
    zone: '',
    specialRequirements: '',
    socialLinks: '',
  });



 
  return (
    <form onSubmit={handleSubmit} className="event-form-container">
      <div className="form-cards-container">
        {/* Tarjeta izquierda */}
        <div className="form-card">
          <h2>Información del Evento</h2>
          
          <div className="form-group">
            <label>Nombre del evento</label>
            <input
              type="text"
              name="eventName"
              value={formData.eventName}
              onChange={handleChange}
              placeholder="Ingrese el nombre del evento"
            />
          </div>
          
          <div className="form-group">
            <label>Descripción</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describa el evento"
            />
          </div>
          
          <div className="form-group">
            <label>Tipo de evento</label>
            <input
              type="text"
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              placeholder="Ej: Conferencia, Taller, etc."
            />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Fecha</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Hora</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
              />
            </div>
          </div>
          
          <div className="form-group">
            <label>Ubicación</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Dirección del evento"
            />
          </div>
        </div>

        {/* Tarjeta derecha */}
        <div className="form-card">
          <h2>Detalles Adicionales</h2>
          
          <div className="form-group">
            <label>Organizador/Entidad Responsable:</label>
            <input
              type="text"
              name="organizer"
              value={formData.organizer}
              onChange={handleChange}
              placeholder="Nombre del organizador"
            />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Categoría:</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="Ej: Música, Deporte"
              />
            </div>
            <div className="form-group">
              <label>Precio:</label>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Ej: $20 o Gratis"
              />
            </div>
          </div>
          
          <div className="form-group">
            <label>Banner del Evento</label>
            <div className="file-upload">
              <label className="file-upload-label">
                <input
                  type="file"
                  onChange={handleBannerChange}
                  accept="image/*"
                  style={{ display: 'none' }}
                />
                Seleccionar Archivo
              </label>
              <p className="file-info">
                {bannerFile ? bannerFile.name : 'Ningún archivo seleccionado'}
              </p>
            </div>
          </div>
          
          <div className="form-group">
            <label>Imágenes del Evento</label>
            <div className="file-upload">
              <label className="file-upload-label">
                <input
                  type="file"
                  onChange={handleImagesChange}
                  accept="image/*"
                  multiple
                  style={{ display: 'none' }}
                />
                Seleccionar Archivos
              </label>
              <p className="file-info">
                {eventImages.length > 0 
                  ? `${eventImages.length} archivo(s) seleccionado(s)`
                  : 'Ningún archivo seleccionado'}
              </p>
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Capacidad:</label>
              <input
                type="number"
                name="capacity"
                value={formData.capacity}
                onChange={handleChange}
                placeholder="Número de asistentes"
              />
            </div>
            <div className="form-group">
              <label>Zona:</label>
              <input
                type="text"
                name="zone"
                value={formData.zone}
                onChange={handleChange}
                placeholder="Área del evento"
              />
            </div>
          </div>
          
          <div className="form-group">
            <label>Requisitos especiales:</label>
            <textarea
              name="specialRequirements"
              value={formData.specialRequirements}
              onChange={handleChange}
              placeholder="Necesidades especiales para el evento"
            />
          </div>
          
          <div className="form-group">
            <label>Enlaces a Redes Sociales o Sitio Web:</label>
            <input
              type="url"
              name="socialLinks"
              value={formData.socialLinks}
              onChange={handleChange}
              placeholder="https://example.com"
            />
          </div>
        </div>
      </div>

      <div className="form-submit">
        <button type="submit" className="submit-button">
          Guardar evento
        </button>
      </div>
    </form>
  );
};

export default EventForm;