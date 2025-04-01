import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // Importa createRoot desde react-dom/client
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';

// Obtén el contenedor root y crea la raíz de React
const rootElement = document.getElementById('root');
const root = createRoot(rootElement); // Usa createRoot directamente

// Renderiza la aplicación
root.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);