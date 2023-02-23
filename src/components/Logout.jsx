import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IMAGE_URL } from "../helpers/globalVariables";

const Logout = (props) => {
  let navigate = useNavigate();

  const signOut = () => {
    console.log("signing out");
    sessionStorage.clear();
    props.setToken(null);
    toast.success("Successfully logged out");
    navigate("/");
  };

  return (
    <div className="row heading">
      <div className="col-sm-3 col-xs-3 heading-avatar">
        <div className="heading-avatar-icon">
          <img
            src={IMAGE_URL + sessionStorage.getItem("user-image")}
          />
          <span className="mx-3 fw-bold">{sessionStorage.getItem("user-name")}</span>
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
