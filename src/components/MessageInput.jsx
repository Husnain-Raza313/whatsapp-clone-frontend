import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { fetchData, sendData } from "../api";

const MessageInput = (props) => {
  const [message, setMessage] = useState("");

  const sendMessage = async () => {
    let formData = new FormData();
    formData.append("body", message);
    formData.append("phone_number", props.contact.phone_number);
    let res = await sendData(`chat_room_messages`, formData);
    if (res != '422' && res != '500') {

      if(props.messages.length == 0){
        let res1 = await fetchData(
          `chat_room_messages?phone_number=${props.contact.phone_number}`
        );
        console.log(res1);
        props.setMessages(res1.messages);
        props.setUserID(res1.sender_chat_id);
        if (res1.messages != null) props.setChatroomID(res1.messages[0].chat_room_id);
        else toast.warning(res1.message);
        }
        props.setSentMsg(res);
    }
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
