import React, { useEffect, useState, useRef } from 'react'
import { fetchData, sendData } from '../api';
import "./MainPage.css";
import Message from './Message';
import consumer from '../cable';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


const MainPage = (props) => {
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({});
  const [messages, setMessages] = useState([]);
  // const [message, setMessage] = useState("");
  const [msg, setMsg] = useState(null);
  const message = useRef("");
  const [userID, setUserID] = useState(null);
  const [receiverID, setReceiverID] = useState(null);
  const [chatroomID, setChatroomID] = useState('');
  const [query, setQuery] = useState('');

  let navigate = useNavigate();

  const signOut = () => {
    console.log("signing out");
    sessionStorage.clear();
    props.setToken(null);
    toast.success("Successfully logged out");
    navigate('/');
  };
  // toast.configure();


  // const ws = new WebSocket("ws://localhost:3000/cable");

  // ws.onopen = () => {
  //   console.log("Connected To Cable");
  //   console.log(userID);

  //   ws.send(JSON.stringify({
  //     command: "subscribe",
  //     identifer: {
  //         "channel": "ChatRoomChannel",
  //         "chat_room_id": contact.chatRoomId,
  //     },
  //   }))
  // };

  // consumer.subscriptions.create({
  //   channel: 'ChatRoomChannel',
  //   username: sessionStorage.getItem("userID")
  // }, {
  //   connected: () => console.log('connected'),
  //   disconnected: () => console.log('disconnected'),
  //   received: (data) => console.log(data),
  // })

  // consumer.subscriptions.create({
  //   channel: 'ChatRoomChannel',
  //   username: sessionStorage.getItem("userID")
  // }, {
  //   connected: () => console.log('connected'),
  //   disconnected: () => console.log('disconnected'),
  //   received: (data) => setMsg(data),
  // })

  const checkTimeout = () => {
    let expired = new Date(sessionStorage.getItem('expiry_time')) > new Date();
    return expired;
  };

  const checkToken = () => {
    return sessionStorage.getItem('user_token') != null && checkTimeout ;
  };

  const getData = async () => {
    let res = await fetchData(`users?query=${query}`);
    console.log(res);
    setContacts(res);
};

const sendMessage = async () => {
  // let res = await fetchData(`chat_room_messages`, );
  // console.log("hello world");
      // console.log(JSON.stringify(message.current));
    let formData = new FormData();
    formData.append("body", message.current);
    formData.append("phone_number", contact.phone_number);
    // formData.append("user_id", userID);

   let res = await sendData(`chat_room_messages`, formData);
   message.current = "";
   console.log(res);

};

const getMessages = async (contact) => {
  setContact(contact);
  console.log(contact.id);
  let res = await fetchData(`chat_room_messages?phone_number=${contact.phone_number}`);
  console.log(res);
  setMessages(res.messages);
  setUserID(res.sender_chat_id);
  if (res.messages != null)
   setChatroomID(res.messages[0].chat_room_id);
  else
    toast.warning(res.message);

};

// useEffect(() => {
//   if (checkToken()) {

//     getData();

//     // consumer.subscriptions.create({
//     //   channel: 'ChatRoomChannel',
//     //   username: sessionStorage.getItem("userID")
//     // }, {
//     //   connected: () => console.log('connected'),
//     //   disconnected: () => console.log('disconnected'),
//     //   received: (data) => console.log(data),
//     // })
//     // return () => {
//     //   consumer.disconnect()
//     // };

//   }
// }, []);

useEffect(() => {
  if (checkToken()) {

    getData();
    // getMessages({id: '3', phone_number: '+923113091373'});
    consumer.subscriptions.create({
      channel: 'ChatRoomChannel',
      chat_room_id: chatroomID
    }, {
      connected: () => console.log('connected'),
      disconnected: () => console.log('disconnected'),
      received: (data) => {
        console.log(data);
        if(data !== null){
          // console.log('In message');
          // console.log(messages);
          setMessages(messages => [...messages, data]);
        }
    }})
    return () => {
      consumer.disconnect()
    };

  }
}, [chatroomID, consumer.subscriptions]);

// useEffect(() => {
//   if (checkToken()) {
//   }
// }, [msg]);

// useEffect(() => {
//   if (SenderId) {
//     cable.subscriptions.create(
//       {
//         channel: "ChatRoomChannel",
//         chat_room_id: contact.chatRoomId,
//       },
//       {
//         received: (data) => {
//           setAllMessage([...allMessages, data.message]);
//         },
//       }
//     );
//   }
// }, [UserId, allMessages, cable.subscriptions, SenderId, chatRoomId]);

// useEffect(() => {
//   // if (messages) {
//   //   setMessages([...messages, message]);
//   // }
// }, [messages]);

  return (
    <div className="container app">
      <div className="row app-one">
        <div className="col-sm-4 side">
          <div className="side-one">
            <div className="row heading">
              <div className="col-sm-3 col-xs-3 heading-avatar">
                <div className="heading-avatar-icon">
                  <img src={"http://localhost:3000"+sessionStorage.getItem("user-image")} />
                </div>
              </div>
              <div className="col-sm-2 col-xs-2 heading-compose mt-1 pull-right">
                <i className="fa fa-sign-out pull-right" aria-hidden="true" onClick={signOut}>Logout</i>
              </div>
            </div>
            <div className="searchBox d-flex align-content-start justify-content-start">
              <div class="input-group">
  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" onChange={(e) => setQuery(e.target.value)} />
  <button type="button" class="btn btn-outline-success" onClick={getData}>search</button>
</div>
            </div>

            <div className="row sideBar main-page-div">

              {contacts && contacts.map((contact, key) =>
                <div className="row sideBar-body main-page-div" key={key} onClick={() => getMessages(contact)}>
                <div className="col-sm-3 col-xs-3 sideBar-avatar">
                  <div className="avatar-icon">
                    <img src={"http://localhost:3000"+contact.profile_pic} />
                  </div>
                </div>
                <div className="col-sm-9 col-xs-9 sideBar-main">
                  <div className="row">
                    <div className="col-sm-8 col-xs-8 sideBar-name">
                      <span className="name-meta">{contact.name}
                    </span>
                    </div>
                    <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                      <span className="time-meta pull-right">18:18
                    </span>
                    </div>
                  </div>
                </div>
              </div>
                 )}
            </div>
          </div>

          <div className="side-two">
            <div className="row newMessage-heading">
              <div className="row newMessage-main">
                <div className="col-sm-2 col-xs-2 newMessage-back">
                  <i className="fa fa-arrow-left" aria-hidden="true"></i>
                </div>
                <div className="col-sm-10 col-xs-10 newMessage-title">
                  New Chat
                </div>
              </div>
            </div>

            <div className="row composeBox">
              <div className="col-sm-12 composeBox-inner">
                <div className="form-group has-feedback">
                  <input id="composeText" type="text" className="form-control" name="searchText" placeholder="Search People" />
                  <span className="glyphicon glyphicon-search form-control-feedback"></span>
                </div>
              </div>
            </div>

            <div className="row compose-sideBar">
              <div className="row sideBar-body">
                <div className="col-sm-3 col-xs-3 sideBar-avatar">
                  <div className="avatar-icon">
                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" />
                  </div>
                </div>
                <div className="col-sm-9 col-xs-9 sideBar-main">
                  <div className="row">
                    <div className="col-sm-8 col-xs-8 sideBar-name">
                      <span className="name-meta">John Doe
                    </span>
                    </div>
                    <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                      <span className="time-meta pull-right">18:18
                    </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

       { messages  ?
        <div className="col-sm-8 conversation">
          <div className="row heading">
            <div className="col-sm-2 col-md-1 col-xs-3 heading-avatar main-page-div">
              <div className="heading-avatar-icon main-page-div">
                <img src="https://bootdey.com/img/Content/avatar/avatar6.png" />
                <span className='mx-2 main-page-span'>{contact.name}</span>
              </div>
            </div>
          </div>

          <div className="row message main-page-div" id="conversation">
          {messages && messages.map((message, key) =>{
            return userID === message.chat_room_participant_id ? (
               <Message key={message.id} message={message} user_type={"sender"} />
            ) : (
              <Message key={message.id} message={message} user_type={"receiver"} />
            )
          }

             )}

          </div>


          <div className="row reply">
            <div className="col-sm-1 col-xs-1 reply-emojis">
              <i className="fa fa-smile-o fa-2x"></i>
            </div>
            <div className="col-sm-9 col-xs-9 reply-main">
              <textarea className="form-control" rows="1" id="comment" onBlur={(e) => message.current= e.target.value }>
              </textarea>
            </div>
            <div className="col-sm-1 col-xs-1 reply-recording">
              <i className="fa fa-microphone fa-2x" aria-hidden="true"></i>
            </div>
            <div className="col-sm-1 col-xs-1 reply-send">
              <i className="fa fa-send fa-2x" aria-hidden="true" onClick={sendMessage}></i>
            </div>
          </div>
        </div>
        :
        <div></div>
}
      </div>
    </div>


  )
}

export default MainPage
