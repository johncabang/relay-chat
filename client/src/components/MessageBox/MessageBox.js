import React from "react";
import { Button, TextField } from "@material-ui/core";

function MessageBox({ message, setMessage, sendMessage }) {
  function handleChange(e) {
    setMessage(e.target.value);
  }

  return (
    <div>
      <form onSubmit={sendMessage}>
        <TextField
          style={{ margin: 50, width: 400 }}
          variant="filled"
          margin="normal"
          value={message}
          onChange={handleChange}
          placeholder="Say something..."
        />
        <Button variant="outlined" type="submit" style={{ margin: 50 }}>
          Send
        </Button>
      </form>

      {/* TODO - FIX / Implement Material UI  */}

      {/* <form onSubmit={sendMessage}>
        <textarea
          value={message}
          onChange={handleChange}
          placeholder="Say something..."
        />
        <button>Send</button>
      </form> */}
    </div>
  );
}

export default MessageBox;
