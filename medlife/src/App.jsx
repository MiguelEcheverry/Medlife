import {userState} from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Inicio from './Paginas/inicio';
import Contacto from './Paginas/contacto';
import Registro from './Paginas/registro';

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirección para la ruta raíz */}
        <Route path="/" element={<Navigate to="/inicio" replace />} />
        
        {/* Rutas (se recomienda usar minúsculas por convención) */}
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </Router>
  );
}

export default App;