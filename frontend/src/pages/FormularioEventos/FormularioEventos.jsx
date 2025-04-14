import { useState } from 'react';
import './css/FormularioEventos.css'; // Asegúrate de que esta ruta sea correcta

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

  const [bannerFile, setBannerFile] = useState(null);
  const [eventImages, setEventImages] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBannerChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setBannerFile(e.target.files[0]);
    }
  };

  const handleImagesChange = (e) => {
    if (e.target.files) {
      setEventImages(Array.from(e.target.files));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...formData, bannerFile, eventImages });
    alert('Formulario enviado. Revisa la consola para ver los datos.');
  };

  return (
    <form onSubmit={handleSubmit} className="event-form-container">
      <div className="form-cards-container">
        {/* Card Izquierda */}
        <div className="form-card">
          <h2>Información del Evento</h2>
          <div className="form-group">
            <label>Nombre del evento:</label>
            <input
              type="text"
              name="eventName"
              value={formData.eventName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Descripción:</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Tipo de evento:</label>
            <input
              type="text"
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Fecha:</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Hora:</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Lugar:</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Organizador:</label>
            <input
              type="text"
              name="organizer"
              value={formData.organizer}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Card Derecha */}
        <div className="form-card">
          <h2>Detalles Adicionales</h2>

          <div className="form-group">
            <label>Categoría:</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Precio:</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Capacidad:</label>
              <input
                type="number"
                name="capacity"
                value={formData.capacity}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Zona:</label>
            <input
              type="text"
              name="zone"
              value={formData.zone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Requisitos especiales:</label>
            <textarea
              name="specialRequirements"
              value={formData.specialRequirements}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Redes sociales:</label>
            <input
              type="text"
              name="socialLinks"
              value={formData.socialLinks}
              onChange={handleChange}
            />
          </div>

          <div className="form-group file-upload">
            <label className="file-upload-label">Banner del evento:</label>
            <input type="file" accept="image/*" onChange={handleBannerChange} />
          </div>

          <div className="form-group file-upload">
            <label className="file-upload-label">Imágenes del evento:</label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImagesChange}
            />
          </div>
        </div>
      </div>

      {/* Botón Final */}
      <div className="form-submit">
        <button type="submit" className="submit-button red-button">
          Guardar Evento
        </button>
      </div>
    </form>
  );
};

export default EventForm;
