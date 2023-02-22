import React, { useEffect, useState } from "react";
import { checkToken } from "../helpers/auth";
import LoginPage from "./LoginPage";
import MainPage from "./MainPage";

const HomePage = (props) => {

  useEffect(() => {
    console.log("Checking");
  }, [props.token]);

  return (
    <div>
      {checkToken() ? (
        <MainPage setToken={props.setToken} />
      ) : (
        <LoginPage setToken={props.setToken} />
      )}
    </div>
  );
};

export default HomePage;
