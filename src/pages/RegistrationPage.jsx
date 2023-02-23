import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Otp from "../components/Otp";
import RegistrationForm from "../components/RegistrationForm";

const RegistrationPage = (props) => {
  const [displayOtp, setDisplayOtp] = useState(false);
  const [user, setUser] = useState({});
  const [secKey, setSecKey] = useState("");

  let navigate = useNavigate();

  return (
    <div
      className="vh-100"
      style={{ backgroundImage: "url('/whatsapp-background.jpeg')" }}
    >
      <section className="">
        <div className="px-4  px-md-5 text-center text-lg-start">
          <div
            className="container p-5 my-5"
            style={{ backgroundColor: "hsl(0, 0%, 96%)" }}
          >
            <div className="row gx-lg-5 align-items-center pl-5">
              <div className="col-lg-7 mb-5 mb-lg-0">
                <h1 className="m-5 display-3 fw-bold ls-tight">
                  Registration Page <br />
                  <span className="text-success">Whatsapp Clone</span>
                </h1>
                <p className="m-5" style={{ color: "hsl(217, 10%, 50.8%)" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                  quibusdam tempora at cupiditate quis eum maiores libero
                  veritatis? Dicta facilis sint aliquid ipsum atque?
                </p>
              </div>

              <div className="col-lg-5 mb-5 mb-lg-0">
                <div
                  className="card border-0"
                  style={{ backgroundColor: "hsl(0, 0%, 96%)" }}
                >
                  <RegistrationForm
                    user={user}
                    secKey={secKey}
                    setSecKey={setSecKey}
                    setDisplayOtp={setDisplayOtp}
                    setUser={setUser}
                  />
                </div>
              </div>
            </div>
            <a
              className="px-5 text-warning fw-bold cursor-pointer"
              onClick={() => navigate("/")}
            >
              Back To Login
            </a>
          </div>
          <div>
            {displayOtp && (
              <Otp user={user} secKey={secKey} setToken={props.setToken} />
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegistrationPage;
