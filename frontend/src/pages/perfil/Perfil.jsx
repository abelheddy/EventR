import React from 'react';
import './css/Perfil.css';
import { Link } from 'react-router-dom';
const Perfil = () => {
  // Datos de ejemplo
  const userData = {
    nombre: 'Nombre de usuario',
    email: 'Correo',
    descripcion: 'Descripción'
  };

  const eventos = [
    {
      titulo: 'Title',
      contenido: 'Body text for whatever you\'d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.'
    },
    {
      titulo: 'Title',
      contenido: 'Body text for whatever you\'d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.'
    },
    {
      titulo: 'Title',
      contenido: 'Body text for whatever you\'d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.'
    }
  ];

  return (
    <div className="perfil-container">
      <div className="perfil-layout">
        {/* Tarjeta de usuario (izquierda) */}
        <div className="usuario-card">
          <div className="usuario-info">
            <h2>{userData.nombre}</h2>
            <p className="usuario-email">{userData.email}</p>
            <p className="usuario-descripcion">{userData.descripcion}</p>
          </div>
          <Link to="/mantenimiento" className="agregar-evento-btn">Editar Perfil</Link>
          <Link to="/formulario-evento" className="agregar-evento-btn">Agregar Evento</Link>
        </div>

        {/* Historial de eventos (derecha) */}
        <div className="historial-section">
        <h1 className="usuario-titulo">Historial</h1>
          {eventos.map((evento, index) => (
            <div key={index} className="evento-card">
              <h2 className="evento-titulo">{evento.titulo}</h2>
              <p className="evento-contenido">{evento.contenido}</p>
              <div className="evento-separador"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Perfil;