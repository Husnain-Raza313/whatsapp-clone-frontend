import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { profileImage } from "../helpers/profileImage";

const Logout = (props) => {
  let navigate = useNavigate();
  console.log(props.user);

  const signOut = () => {
    console.log("signing out");
    sessionStorage.clear();
    props.setToken(null);
    toast.error("Successfully logged out");
    navigate("/");
  };

  return (
    <div className="row heading">
      <div className="col-sm-3 col-xs-3 heading-avatar">
        <div className="heading-avatar-icon">
          <img src={profileImage(props.user)} />
          <span className="mx-3 fw-bold">
            {sessionStorage.getItem("user-name")}
          </span>
        </div>
      </div>
      <div className="col-sm-2 col-xs-2 heading-compose mt-1 pull-right">
        <i
          className="fa fa-sign-out pull-right"
          aria-hidden="true"
          onClick={signOut}
        >
          Logout
        </i>
      </div>
    </div>
  );
};

export default Logout;
