import { useEffect, useState } from 'react';
import axios from 'axios';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
//import './App.css';
import Header from './components/Header'; // Importa el componente Header
import Footer from './components/Footer'; // Importa el componente Footer
import MainPage from './pages/MainPage';

function App() {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/')
            .then(response => setMessage(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <>
           
            {/* <div className="App">
                <h1>Frontend conectado al Backend</h1>
                <p>{message}</p>
                
                <div>
                    <a href="https://vite.dev" target="_blank">
                        <img src={viteLogo} className="logo" alt="Vite logo" />
                    </a>
                    <a href="https://react.dev" target="_blank">
                        <img src={reactLogo} className="logo react" alt="React logo" />
                    </a>
                </div>
                <h1>Vite + React</h1>
                <div className="card">
                    <button onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </button>
                    <p>
                        Edit <code>src/App.jsx</code> and save to test HMR
                    </p>
                </div>
                <p className="read-the-docs">
                    Click on the Vite and React logos to learn more
                </p>
            </div> */}
            <div className="App">
                <MainPage />
            </div>
        </>
    );
}

export default App;