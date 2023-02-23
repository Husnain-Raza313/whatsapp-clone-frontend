import React, { useState } from "react";
import { sendData } from "../api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import InputComponent from "../components/InputComponent";

const LoginPage = (props) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleLogin = async () => {
    const user = await { phone_number: phoneNumber, password: password };
    let res = await sendData("login", user);
    if(res.data.token != null){
      sessionStorage.setItem("user_token", res.data.token);
    sessionStorage.setItem("expiry_time", res.data.exp);
    sessionStorage.setItem("userID", res.data.user.id);
    sessionStorage.setItem("user-image", res.data.profile_pic);
    sessionStorage.setItem("user-name",res.data.user.name);
    props.setToken(res.data.token);
    toast.success("Successfully logged in");
    navigate("/");
    }
    else
    toast.error(res.message);
  };
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
                    <InputComponent
                      type={"tel"}
                      placeholder={"Phone Number"}
                      className={"form-control form-control-lg"}
                      id={""}
                      setValue={setPhoneNumber}
                    />
                    <InputComponent
                      type={"password"}
                      placeholder={"Password"}
                      className={"form-control form-control-lg"}
                      id={"typePasswordX"}
                      setValue={setPassword}
                    />

                    <p className="small mb-5 pb-lg-2">
                      <a className="text-white-50" href="#!">
                        Forgot password?
                      </a>
                    </p>

                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      type="submit"
                      disabled={!validateForm()}
                      onClick={handleLogin}
                    >
                      Login
                    </button>
                  </div>

                  <div>
                    <p className="mb-0">
                      Don't have an account?{" "}
                      <a
                        className="text-white-50 fw-bold cursor-pointer"
                        onClick={() => {
                          navigate("/registration");
                        }}
                      >
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
