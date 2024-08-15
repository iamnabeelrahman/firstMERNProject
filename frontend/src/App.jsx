import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register/Register';
import Login from './components/Login/login';
import HomePage from './components/homepage/HomePage';

function App() {
  const [login, setLogin] = useState([]);
  const [register, setRegister] = useState([]);

  fetch("http://localhost:3000/login")
  .then(async function (res) {
    const json = await res.json();
    setLogin(json.email)
  })
  
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} /> Default route
        <Route path="/homepage" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
