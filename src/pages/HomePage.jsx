import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { checkToken } from "../helpers/auth";
import LoginPage from "./LoginPage";
import MainPage from "./MainPage";

const HomePage = (props) => {
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    console.log("Checking");
  }, [props.token, expired]);

  return (
    <div>
      {checkToken() ? (
        <MainPage
          setToken={props.setToken}
          setExpired={setExpired}
          expired={expired}
        />
      ) : (
        <LoginPage setToken={props.setToken} />
      )}
    </div>
  );
};

export default HomePage;
