import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import RegistrationPage from "../pages/RegistrationPage";

const Router = () => {
  const [token, setToken] = useState(null);

  return (
    <Routes>
      <Route path="/" element={<HomePage setToken={setToken} />} />
      <Route path="/registration" element={<RegistrationPage setToken={setToken} />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
