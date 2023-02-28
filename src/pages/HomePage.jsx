import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { checkToken } from "../helpers/auth";
import LoginPage from "./LoginPage";
import MainPage from "./MainPage";

const HomePage = (props) => {
  const [expired, setExpired] = useState(false);
  const [user, setUser] = useState({
    profile_pic: null,
  });

  useEffect(() => {
    console.log("Checking");
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
