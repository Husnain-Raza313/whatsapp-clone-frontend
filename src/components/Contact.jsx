import React, { useEffect } from "react";
import { toast } from "react-toastify";

import { profileImage } from "../helpers/profileImage";

const Contact = (props) => {
  return (
    <div
      className="row sideBar-body main-page-div"
      onClick={() => props.getMessages(props.contact)}
    >
      <div className="col-sm-3 col-xs-3 sideBar-avatar">
        <div className="avatar-icon">
          <img src={profileImage(props.contact)} />
        </div>
      </div>
      <div className="col-sm-9 col-xs-9 sideBar-main">
        <div className="row">
          <div className="col-sm-8 col-xs-8 sideBar-name">
            <span className="name-meta">{props.contact.name}</span>
          </div>
          <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
            <span className="time-meta pull-right">18:18</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
