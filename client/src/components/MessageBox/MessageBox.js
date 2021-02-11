import React from "react";
import { Button, Icon, TextField } from "@material-ui/core";

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
          alignItems: "center",
          padding: 15,
        }}
      >
        <TextField
          style={{ width: 400, paddingLeft: 15 }}
          variant="standard"
          margin="normal"
          value={message}
          onChange={handleChange}
          placeholder="Say something..."
        />
        <Button
          variant="contained"
          type="submit"
          color="primary"
          style={{ marginLeft: 30, textTransform: "none", borderRadius: 25 }}
        >
          Send
        </Button>
      </form>
    </div>
  );
}

export default MessageBox;
