import React from "react";
import { Button, TextField } from "@material-ui/core";

function MessageBox({ message, setMessage, sendMessage }) {
  function handleChange(e) {
    setMessage(e.target.value);
  }

  return (
    <div>
      <form
        onSubmit={sendMessage}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          padding: 15,
        }}
      >
        <TextField
          style={{ width: 400 }}
          variant="filled"
          margin="normal"
          value={message}
          onChange={handleChange}
          placeholder="Say something..."
        />
        <Button variant="outlined" type="submit" style={{ marginLeft: 30 }}>
          Send
        </Button>
      </form>
    </div>
  );
}

export default MessageBox;
