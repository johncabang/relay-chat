import React from "react";
import MessageBox from "../MessageBox/MessageBox";
import Messages from "../Messages/Messages";

function Chat({ messages, setMessage, sendMessage, yourID }) {
  return (
    <div>
      <Messages messages={messages} yourID={yourID} />
      <MessageBox setMessage={setMessage} sendMessage={sendMessage} />
    </div>
  );
}
export default Chat;
