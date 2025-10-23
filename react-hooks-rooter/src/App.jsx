import Contador from './components/Contador';
import FormularioNombre from './components/FormularioNombre';
import ListaUsuarios from './components/ListaUsuarios';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import './App.css';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <div className="app">
        
        <nav className="navbar">
          <div className="nav-brand">Mi App</div>
          <div className="nav-links">
            <Link to="/">Inicio</Link>
            <Link to="/about">Nosotros</Link>
            <Link to="/contact">Contacto</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <footer className="footer">
        <p>&copy; 2025 Mi App. Todos los derechos reservados.</p>
      </footer>
    </BrowserRouter>
  )
}

export default App
