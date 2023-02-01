import './App.css';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from './pages/ErrorPage';
import MainPage from './pages/MainPage';
import { useEffect, useState } from 'react';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="*" element={<ErrorPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
