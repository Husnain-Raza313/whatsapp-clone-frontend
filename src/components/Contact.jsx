import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { fetchData } from "../api";
import { IMAGE_URL } from "../helpers/globalVariables";

const Contact = (props) => {


  // useEffect(() => {
  //   if(props.messages == null){
  //     debugger
  //   let res = fetchData(
  //     `chat_room_messages?phone_number=${props.contact.phone_number}`
  //   );
  //   console.log(res);
  //   props.setMessages(res.messages);
  //   props.setUserID(res.sender_chat_id);
  //   if (res.messages != null) props.setChatroomID(res.messages[0].chat_room_id);
  //   else toast.warning(res.message);
  //   }
  // }, [props.sentMsg]);

  return (
    <div
      className="row sideBar-body main-page-div"
      onClick={() => props.getMessages(props.contact)}
    >
      <div className="col-sm-3 col-xs-3 sideBar-avatar">
        <div className="avatar-icon">
          <img src={IMAGE_URL+ props.contact.profile_pic} />
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
