import { useState } from 'react'
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Inicio from './Paginas/inicio'
import Contacto from './Paginas/contacto'
import Registro from './Paginas/registro'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Registro" element={<Registro />} />
      </Routes>
    </Router>
  )
}  

export default App