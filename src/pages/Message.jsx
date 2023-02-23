import React from "react";

import MessageBar from "../components/MessageBar";
import MessageInput from "../components/MessageInput";
import MessagePanel from "../components/MessagePanel";

const Message = (props) => {
  return (
    <div className="col-sm-8 conversation">
      <MessageBar contact={props.contact} />
      <div className="message main-page-div" id="conversation">
        {props.messages &&
          props.messages.map((message, key) => {
            return props.userID === message.chat_room_participant_id ? (
              <MessagePanel
                key={message.id}
                message={message}
                user_type={"sender"}
                contact={props.contact}
              />
            ) : (
              <MessagePanel
                key={message.id}
                message={message}
                user_type={"receiver"}
                contact={props.contact}
              />
            );
          })}
      </div>
      <MessageInput
        contact={props.contact}
        getMessages={props.getMessages}
        sentMsg={props.sentMsg}
        setUserID={props.setUserID}
        setChatroomID={props.setChatroomID}
        setMessages={props.setMessages}
        messages={props.messages}
        setSentMsg={props.setSentMsg}
      />
    </div>
  );
};

export default Message;
