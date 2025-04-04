import { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
//import './App.css';
import Header from './components/Header';
import './components/Components.css'; // Importa los estilos globales
import Footer from './components/Footer'; // Importa el componente Footer
import Login from './pages/login/Login'; // Importa la página de Login
import MainPage from './pages/MainPage'; // Importa la página MainPage

function App() {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/')
            .then(response => setMessage(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="app-container">
            <Header />
            <h1>Prueba básica</h1>
            <p>Mensaje del backend: {message || "Cargando..."}</p>
            <Footer />
        </div>
    );
}

export default App;