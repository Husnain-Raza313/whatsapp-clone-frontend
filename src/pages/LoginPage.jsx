import React, { useState } from "react";
import { sendData } from "../api";

const LoginPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () =>{

    const user = await { "phone_number": phoneNumber, "password": password };
    let res = await sendData("login",user);
    console.log(res);
    sessionStorage.setItem('user_token',res.session_token);

  }
  const validateForm = () => {
    return phoneNumber.length > 0 && password.length > 0;
  };
  return (
    <div
      className="whatsapp-bckg"
      style={{ backgroundImage: "url('/whatsapp-background.jpeg')" }}
    >
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-success text-white">
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-5">
                      Please enter your login and password!
                    </p>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="tel"
                        className="form-control form-control-lg"
                        placeholder="Phone Number"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="password"
                        id="typePasswordX"
                        className="form-control form-control-lg"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>

                    <p className="small mb-5 pb-lg-2">
                      <a className="text-white-50" href="#!">
                        Forgot password?
                      </a>
                    </p>

                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      type="submit" disabled={!validateForm()}
                      onClick={handleLogin}
                    >
                      Login
                    </button>
                  </div>

                  <div>
                    <p className="mb-0">
                      Don't have an account?{" "}
                      <a href="#!" className="text-white-50 fw-bold">
                        Sign Up
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
