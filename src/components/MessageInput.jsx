import React, { useRef, useState } from "react";
import { sendData } from "../api";

const MessageInput = (props) => {
  const [message, setMessage] = useState("");

  const sendMessage = async () => {
    let formData = new FormData();
    formData.append("body", message);
    formData.append("phone_number", props.contact.phone_number);
    let res = await sendData(`chat_room_messages`, formData);
    setMessage("");
    console.log(res);
  };

  return (
    <div className="row reply">
      <div className="col-sm-1 col-xs-1 reply-emojis">
        <i className="fa fa-smile-o fa-2x"></i>
      </div>
      <div className="col-sm-9 col-xs-9 reply-main">
        <textarea
          className="form-control"
          rows="1"
          id="comment"
          onBlur={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <div className="col-sm-1 col-xs-1 reply-recording">
        <i className="fa fa-microphone fa-2x" aria-hidden="true"></i>
      </div>
      <div className="col-sm-1 col-xs-1 reply-send">
        <i
          className="fa fa-send fa-2x"
          aria-hidden="true"
          onClick={sendMessage}
        ></i>
      </div>
    </div>
  );
};

export default MessageInput;
