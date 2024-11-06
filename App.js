import logo from './logo.svg';
import './App.css';
import FirstPage from './QuizzApp/FirstPage'
import Formulaire from './QuizzApp/Formulaire';
import Connexion from './QuizzApp/Connexion';
import Nav from './QuizzApp/Nav';
import Main from './QuizzApp/Main'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios'
import { useState, useEffect } from 'react';
function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<FirstPage />} />
        <Route path="/formulaire" element={<Formulaire/>} />
        <Route path="/Connexion" element={<Connexion/>} />
        <Route path="/Nav/:email/:motdepasse/:genre" element={<Nav/>} />
        <Route path="/Main" element={<Main/>} />
      </Routes>
    </Router>
  );
}

export default App;
