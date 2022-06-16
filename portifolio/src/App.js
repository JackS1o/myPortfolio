import React from 'react';
import { Route, Routes } from 'react-router-dom';
import InicialPage from './components/InicialPage';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<InicialPage />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default App;
