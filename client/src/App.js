import React from "react";
import io from "socket.io-client";
import Chat from "./components/Chat/Chat";

const socket = io("http://localhost:3001/");

function App() {
  socket.on("connect", () => {
    socket.send("Hello from John");

    socket.on("message", (message) => {
      // my message
    });
  });
  return <Chat />;
}

export default App;
