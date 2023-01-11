import React, { useState } from "react";
import { sendData } from "../api";

const LoginPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  // const handleLogin = async () =>{

  //   const user = await { "phone_number": phoneNumber, "password": password };
  //   let res = await sendData("login",user);
  //   console.log(res);
  //   sessionStorage.setItem('user_token',res.session_token);

  // }
  // const validateForm = () => {
  //   return phoneNumber.length > 0 && password.length > 0;
  // };
  return (
    <div
      className="vh-100"
      style={{ backgroundImage: "url('/whatsapp-background.jpeg')" }}
    >
    <section class="">
      <div class="px-4 py-5 px-md-5 text-center text-lg-start" >
        <div class="container p-5 my-5" style={{backgroundColor: "hsl(0, 0%, 96%)"}}>
          <div class="row gx-lg-5 align-items-center pl-5">
            <div class="col-lg-7 mb-5 mb-lg-0">
              <h1 class="m-5 display-3 fw-bold ls-tight">
                Registration Page <br />
                <span class="text-success">Whatsapp Clone</span>
              </h1>
              <p className="m-5" style={{color: "hsl(217, 10%, 50.8%)"}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                quibusdam tempora at cupiditate quis eum maiores libero
                veritatis? Dicta facilis sint aliquid ipsum atque?
              </p>
            </div>

            <div class="col-lg-5 mb-5 mb-lg-0">
              <div class="card border-0" style={{backgroundColor: "hsl(0, 0%, 96%)"}}>
                <div class="d-flex justify-content-start ">
                  <form>

                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input type="text" id="form3Example1" class="form-control" placeholder="Name"  />
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input type="text" id="form3Example2" class="form-control" placeholder="Username"  />
                        </div>
                      </div>
                    </div>

                    <div class="form-outline mb-4">
                      <input type="tel" id="form3Example3" class="form-control" placeholder="Phone Number" />
                    </div>

                    <div class="form-outline mb-5">
                      <input type="password" id="form3Example4" class="form-control" placeholder="Password"  />
                    </div>

                    <div className="w-100 d-flex justify-content-center">
                      <button type="submit" className="btn btn-success btn-lg rounded-1">
                        SIGN UP
                      </button>
                    </div>
                  </form>
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
