import React, { useEffect, useState, useRef } from "react";
import { fetchData } from "../api";
import "./MainPage.css";
import Message from "./Message";
import consumer from "../cable";
import Contact from "../components/Contact";
import Search from "../components/Search";
import Logout from "../components/Logout";
import { checkToken } from "../helpers/auth";

const MainPage = (props) => {
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState(null);
  const [messages, setMessages] = useState([]);
  const message = useRef("");
  const [userID, setUserID] = useState(null);
  const [chatroomID, setChatroomID] = useState("");
  const [query, setQuery] = useState("");

  const getData = async () => {
    let res = await fetchData(`users?query=${query}`);
    console.log(res);
    setContacts(res);
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
      return () => {
        consumer.disconnect();
      };
    }
  }, [chatroomID, consumer.subscriptions]);

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
            <div className="row sideBar main-page-div">
              {contacts &&
                contacts.map((contact, key) => (
                  <Contact
                    key={key}
                    contact={contact}
                    setUserID={setUserID}
                    setMessages={setMessages}
                    setContact={setContact}
                    setChatroomID={setChatroomID}
                  />
                ))}
            </div>
          </div>
        </div>

        {contact ? (
            <Message
              key={message.id}
              message={message}
              contact={contact}
              messages={messages}
              userID={userID}
            />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default MainPage;
