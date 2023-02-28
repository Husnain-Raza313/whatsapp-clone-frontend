import React from "react";

const NewChat = (props) => {
  return (
    <div className="col-sm-8 conversation d-flex justify-content-center align-content-center">
      <div className="col-sm-8 conversation d-flex justify-content-center align-content-center">
        <div className="h-25 w-75 conversation-msg">
          <b>Start Conversation With {props.contact.name}</b>
          <br />
          <button
            className="btn btn-primary btn-lg w-auto h-auto"
            onClick={props.startConversation}
          >
            Start Chatting
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewChat;
