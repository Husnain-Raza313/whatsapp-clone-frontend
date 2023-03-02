import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { checkToken } from "../helpers/auth";
import LoginPage from "./LoginPage";
import MainPage from "./MainPage";

const HomePage = (props) => {
  const [expired, setExpired] = useState(false);
  const [user, setUser] = useState({
    profile_pic: null,
  });

  let navigate = useNavigate();
  
  useEffect(() => {
    console.log("Checking");
    navigate('/');
  }, [props.token, expired]);

  return (
    <div>
      {checkToken() ? (
        <MainPage
          setToken={props.setToken}
          setExpired={setExpired}
          setUser={setUser}
          expired={expired}
          user={user}
        />
      ) : (
        <LoginPage setToken={props.setToken} setUser={setUser} />
      )}
    </div>
  );
};

export default HomePage;
