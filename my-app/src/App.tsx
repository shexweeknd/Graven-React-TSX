import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './screens/Home';
import { Ressources } from './screens/Ressources';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ressources" element={<Ressources />} />
      </Routes>
    </div>
  );
}

export default App;
