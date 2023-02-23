import React, { useState } from "react";
import { sendData } from "../api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Otp = (props) => {
  const [otp, setOtp] = useState("");
  let navigate = useNavigate();

  const verifyOtp = async () => {
    let res = await sendData(
      `users/${otp}/verify_otp?otp_secret_key=${props.secKey}`,
      props.user
    );
    console.log(res.data);
    if (res.status == "200") {
      toast.success("Successfully Registered");
      navigate("/");
    } else {
      toast.error(res.message);
    }
  };
  return (
    <div class="container height-100 d-flex justify-content-center align-items-center">
      <div class="position-relative w-50">
        <div class="card p-2 text-center">
          <h6>
            Please enter the one time password <br /> to verify your account
          </h6>
          <div>
            <span>A code has been sent to</span>{" "}
            <small>{props.user.phone_number}</small>
          </div>
          <div
            id="otp"
            class="inputs d-flex flex-row justify-content-center mt-2 h-25"
          >
            <input
              class="m-2 text-center form-control rounded w-25"
              placeholder="Enter OTP"
              type="text"
              id="first"
              maxlength="6"
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>{" "}
          <div class="mt-4">
            <button class="btn btn-danger px-4 validate" onClick={verifyOtp}>
              Validate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;
