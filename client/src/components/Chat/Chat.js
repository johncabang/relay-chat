import React from "react";
import MessageBox from "../MessageBox/MessageBox";
import Messages from "../Messages/Messages";
import { Paper } from "@material-ui/core";

function Chat({ message, messages, setMessage, sendMessage, yourID }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Paper
        style={{
          display: "flex",
          justifyContent: "flex-end",
          flexDirection: "column",
          width: 500,
          height: 500,
          borderRadius: 20,
        }}
      >
        <Messages messages={messages} yourID={yourID} />
        <MessageBox
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </Paper>
    </div>
  );
}
export default Chat;
