import React from "react";

const MessagePanel = (props) => {
  return (
    <div className="row message-body border-2 main-page-div" key={props.key}>
      <div className={`message-main-${props.user_type} main-page-div`}>
        <div className={`${props.user_type} main-page-div`}>
          <div className="message-text main-page-div">{props.message.body}</div>
          <span className="message-time pull-right main-page-span">Sun</span>
        </div>
      </div>
    </div>
  );
};

export default MessagePanel;
