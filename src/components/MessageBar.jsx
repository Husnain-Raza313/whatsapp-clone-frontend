import React from "react";

import { IMAGE_URL } from "../helpers/globalVariables";

const MessageBar = (props) => {
  return (
    <div className="row heading">
      <div className="col-sm-2 col-md-1 col-xs-3 heading-avatar main-page-div">
        <div className="heading-avatar-icon main-page-div">
          <img src={IMAGE_URL + props.contact.profile_pic} />
          <span className="mx-2 main-page-span">{props.contact.name}</span>
        </div>
      </div>
    </div>
  );
};

export default MessageBar;
