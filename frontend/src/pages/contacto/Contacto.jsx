import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/contacto.css';
import logo from '../../assets/logo.png'; // Asegúrate de que la ruta sea correcta

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Limpiar errores al escribir
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    } else if (formData.nombre.length < 2) {
      newErrors.nombre = 'El nombre debe tener al menos 2 caracteres';
    }

    if (!formData.email) {
      newErrors.email = 'El email es requerido';
    } else if (!formData.email.match(/^\S+@\S+\.\S+$/)) {
      newErrors.email = 'Por favor ingresa un email válido';
    }

    if (!formData.mensaje) {
      newErrors.mensaje = 'El mensaje es requerido';
    } else if (formData.mensaje.length < 10) {
      newErrors.mensaje = 'El mensaje debe tener al menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/api/contacto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setSubmitError(data.message || 'Error al enviar el formulario');
        return;
      }

      setSubmitStatus('success');
      setFormData({ nombre: '', email: '', mensaje: '' });
    } catch (error) {
      setSubmitError('Error de conexión con el servidor');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contacto-page">
      <div className="contacto-container">
        <div className="contacto-header">
          <img src={logo} alt="Eventr Logo" className="contacto-logo" />
          <h1 className="contacto-title">EVENTR</h1>
        </div>

        <div className="contacto-message">
          <p>Por favor completa el formulario para contactarnos. Te responderemos a la brevedad.</p>
        </div>

        {submitStatus === 'success' && (
          <div className="success-message">
            ¡Gracias por contactarnos! Hemos recibido tu mensaje.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="error-message">
            Ocurrió un error al enviar tu mensaje. Por favor intenta nuevamente.
          </div>
        )}

        <form onSubmit={handleSubmit} className="contacto-form" noValidate>
          <div className={`form-group ${errors.nombre ? 'error' : ''}`}>
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
            {errors.nombre && <span className="error-text">{errors.nombre}</span>}
          </div>

          <div className={`form-group ${errors.email ? 'error' : ''}`}>
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className={`form-group ${errors.mensaje ? 'error' : ''}`}>
            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              rows="5"
              required
            />
            {errors.mensaje && <span className="error-text">{errors.mensaje}</span>}
          </div>

          <button
            type="submit"
            className={`contacto-button ${isSubmitting ? 'loading' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="spinner"></span>
                Enviando...
              </>
            ) : (
              'Enviar Mensaje'
            )}
          </button>
        </form>

        <div className="back-link">
          <Link to="/">Regresar al inicio</Link>
        </div>
      </div>
    </div>

  );
};

export default Contacto;