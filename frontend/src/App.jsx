import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Importa las librerías necesarias
import { AuthProvider, useAuth } from './context/AuthContext';  // Importa el contexto de autenticación
import Header from './components/Header';
import './components/Components.css'; // Importa los estilos globales
import Footer from './components/Footer'; // Importa el componente Footer
import Login from './pages/login/Login'; // Importa la página de Login
import MainPage from './pages/MainPage'; // Importa la página MainPage
import Reg from './pages/register/register'; // importa la página de registro
import Mante from './pages/mantenimiento/mantenimiento'; // importa la página de mantenimiento
import Perfil from './pages/perfil/Perfil' //importa la paguina de Perfil
import Contacto from './pages/contacto/Contacto'; // importa la página de contacto
import ForgotPassword from './pages/resetPassword/ForgotPassword'; // importa la página de recuperación de contraseña



// Componente para rutas protegidas
const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, loading } = useAuth();

    if (loading) return <div className="loading-spinner">Cargando...</div>;
    if (!isAuthenticated) return <Navigate to="/login" replace />;

    return children;
};

function App() {
    const [message, setMessage] = useState('');
  
    useEffect(() => {
        axios.get('http://localhost:5000/')
            .then(response => setMessage(response.data))
            .catch(error => console.error(error));
    }, []);
  
    return (
        <AuthProvider>
            <div className="app-container">
                <Header />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/register" element={<Reg />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/mantenimiento" element={<Mante />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                        <Route path="/perfil" element={<Perfil/>}/>
                        <Route path="/contacto" element={<Contacto/>}/>
                        <Route path="/Reset-Password" element={<ForgotPassword/>}/>
                    </Routes>
                </main>
                <Footer />
            </div>
        </AuthProvider>
    );
  }

export default App;