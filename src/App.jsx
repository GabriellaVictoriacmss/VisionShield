import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Equipamentos from './pages/Equipamentos';
import Bibliografias from './pages/Bibliografias';
import ModoDeUso from './pages/ModoDeUso';
import Login from './pages/Login';
import Integrantes from './pages/Integrantes';

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/equipamentos" element={<Equipamentos />} />
        <Route path="/bibliografias" element={<Bibliografias />} />
        <Route path="/modo-de-uso" element={<ModoDeUso />} />
        <Route path="/login" element={<Login />} />
        <Route path="/integrantes" element={<Integrantes />} />
      </Routes>
    </Router>
  );
}

export default App;
