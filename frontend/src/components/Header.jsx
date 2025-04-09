import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Components.css';
import logo from '../assets/logo.png';

const Header = () => {
  const { user, isAuthenticated, logout, loading } = useAuth();

  // Mostrar spinner mientras se verifica la autenticación
  if (loading) {
    return (
      <header className="header">
        <nav className="nav-container">
          <div className="loading-spinner"></div>
        </nav>
      </header>
    );
  }

  return (
    <header className="header">
      <nav className="nav-container">
        {/* Logo */}
        <Link to="/" className="logo-link">
          <img src={logo} alt="Logo" className="logo" />
        </Link>

        {/* Barra de búsqueda */}
        <div className="search-container">
          <input type="text" placeholder="Buscar..." className="search-input" />
          <button className="search-button">
            <i className="fas fa-search"></i>
          </button>
        </div>

        {/* Menú de navegación */}
        <ul className="nav-menu">
          <li><Link to="/destacados" className="nav-link">Destacados</Link></li>
          <li><Link to="/contacto" className="nav-link">Contacto</Link></li>
          {isAuthenticated && (
            <li><Link to="/mis-eventos" className="nav-link">Mis Eventos</Link></li>
          )}
        </ul>

        {/* Sección de usuario */}
        <div className="user-section">
          {isAuthenticated ? (
            <div className="user-dropdown">
              <div className="user-info">
                <span className="username">{user?.name || user?.email}</span>
                {user?.avatar ? (
                  <img src={user.avatar} alt="User" className="user-avatar" />
                ) : (
                  <div className="avatar-placeholder">
                    {user?.name?.charAt(0) || user?.email?.charAt(0)}
                  </div>
                )}
              </div>
              <div className="dropdown-menu">
                <Link to="/perfil" className="dropdown-item">Mi Perfil</Link>
                <Link to="/configuracion" className="dropdown-item">Configuración</Link>
                <button onClick={logout} className="dropdown-item logout-button">
                  Cerrar sesión
                </button>
              </div>
            </div>
          ) : (
            <div className="auth-buttons">
              <Link to="/login" className="auth-btn">Iniciar sesión</Link>
              <Link to="/register" className="auth-btn register-btn">Registrarse</Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;