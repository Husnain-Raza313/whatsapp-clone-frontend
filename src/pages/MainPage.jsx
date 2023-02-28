import React, { useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { fetchData } from "../api";
import "./MainPage.css";
import Message from "./Message";
import consumer from "../cable";
import Contact from "../components/Contact";
import Search from "../components/Search";
import Logout from "../components/Logout";
import { checkToken } from "../helpers/auth";
import { chatName } from "../helpers/chatRoomName";


const MainPage = (props) => {
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState(null);
  const [sender, setSender] = useState(null);
  const [messages, setMessages] = useState([]);
  const [chatroomID, setChatroomID] = useState("");
  const [query, setQuery] = useState("");
  const [sentMsg, setSentMsg] = useState("");

  let navigate = useNavigate();

  const getData = async () => {
    if (checkToken()) {
      let res = await fetchData(`users?query=${query}`);
      if (res.status == "200") {
        console.log(res.data);
        setContacts(res.data);
      }
    } else {
      props.setExpired(!props.expired);
    }
  };

  const startConversation = async () => {

    if (checkToken()) {
      alert(props.user.id);
      let res = await fetchData(`chat_room_messages/${contact.id}?chat_room_name=${chatName(contact.phone_number)}`);
      if (res.status == "200") {
        console.log(res.data);
        setChatroomID(res.data.chat_room_id);
      }
    } else {
      props.setExpired(!props.expired);
    }


  };

  const getMessages = async (contact) => {
    if (checkToken()) {
      setContact(contact);
      setChatroomID(null);
      console.log(contact.id);
      let res = await fetchData(
        `chat_room_messages?chat_room_name=${chatName(contact.phone_number)}`
      );
      console.log(res.data);
      if (res.data.messages != null) {
        setMessages(res.data.messages);
        console.log(res.data.sender);
        setSender(res.data.sender);
        setChatroomID(res.data.messages[0].chat_room_id);
      } else {
        toast.warning(res.data.message);
        setMessages([]);
      }
    } else {
      props.setExpired(!props.expired);
    }
  };

  useEffect(() => {
    if (checkToken()) {
      getData();
      consumer.subscriptions.create(
        {
          channel: "ChatRoomChannel",
          chat_room_id: chatroomID,
        },
        {
          connected: () => console.log("connected"),
          disconnected: () => console.log("disconnected"),
          received: (data) => {
            console.log(data);
            if (data !== null) {
              setMessages((messages) => [...messages, data]);
            }
          },
        }
      );
    }
  }, [chatroomID, consumer.subscriptions]);

  useEffect(() => {
    navigate("/");
  }, [props.expired]);

  useEffect(() => {

  }, [contact]);

  return (
    <div className="container app">
      <div className="row app-one">
        <div className="col-sm-4 side">
          <div className="side-one">
            <Logout setToken={props.setToken} />
            <Search
              query={query}
              setQuery={setQuery}
              setContacts={setContacts}
              getData={getData}
            />
            <div className="sideBar main-page-div">
              {contacts &&
                contacts.map((contact, key) => (
                  <Contact
                    key={key}
                    contact={contact}
                    messages={messages}
                    setMessages={setMessages}
                    setContact={setContact}
                    setChatroomID={setChatroomID}
                    sentMsg={sentMsg}
                    getMessages={getMessages}
                  />
                ))}
            </div>
          </div>
        </div>

        {contact ? (
            chatroomID ? (
              <Message
                contact={contact}
                messages={messages}
                setMessages={setMessages}
                sender={sender}
                setSender={setSender}
                sentMsg={sentMsg}
                setSentMsg={setSentMsg}
                setChatroomID={setChatroomID}
                getMessages={getMessages}
              />
            ) : (
              <div className="col-sm-8 conversation d-flex justify-content-center align-content-center">
              <div className="h-25 w-50 conversation-msg">
              <b>Start Conversation With {contact.name}</b>
              <button className="btn btn-primary btn-lg w-auto h-auto" onClick={startConversation}>Start Chatting</button>
              </div>
              </div>
            )

        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default MainPage;
