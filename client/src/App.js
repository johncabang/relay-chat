import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import Chat from "./components/Chat/Chat";

function App() {
  const [yourID, setYourID] = useState();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io.connect("http://localhost:3001/");

    socketRef.current.on("your id", (id) => {
      setYourID(id);
    });

    socketRef.current.on("message", (message) => {
      console.log("here");
      receivedMessage(message);
    });
  }, []);

  function receivedMessage(message) {
    setMessages((oldMsgs) => [...oldMsgs, message]);
  }

  function sendMessage(e) {
    e.preventDefault();
    const messageObject = {
      body: message,
      id: yourID,
    };
    setMessage("");
    socketRef.current.emit("send message", messageObject);
  }

  return (
    <div>
      <h3 style={{ margin: 50 }}>relay-chat</h3>
      <Chat
        messages={messages}
        setMessage={setMessage}
        sendMessage={sendMessage}
        yourID={yourID}
      />
    </div>
  );
}

export default App;
