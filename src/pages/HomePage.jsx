import React, { useEffect, useState } from "react";
import { checkToken } from "../helpers/auth";
import LoginPage from "./LoginPage";
import MainPage from "./MainPage";

const HomePage = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    console.log("Checking");
  }, [token]);

  return (
    <div>
      {checkToken() ? (
        <MainPage setToken={setToken} />
      ) : (
        <LoginPage setToken={setToken} />
      )}
    </div>
  );
};

export default HomePage;
