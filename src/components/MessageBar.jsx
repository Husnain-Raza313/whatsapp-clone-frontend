import React from "react";

import { IMAGE_URL } from "../helpers/globalVariables";
import { profileImage } from "../helpers/profileImage";

const MessageBar = (props) => {
  return (
    <div className="row heading">
      <div className="col-sm-2 col-md-1 col-xs-3 heading-avatar main-page-div w-100">
        <div className="heading-avatar-icon main-page-div">
          <img src={(profileImage(props.contact))} />
          <span className="mx-2 main-page-span w-100">{props.contact.name}</span>
        </div>
      </div>
    </div>
  );
};

export default MessageBar;
