import React from "react";
import {
  Avatar,
  // Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core/";

function Messages({ messages, yourID }) {
  return (
    <div style={{ overflow: "scroll" }}>
      <List style={{ height: 300 }}>
        {messages.map((message, index) => {
          if (message.id === yourID) {
            return (
              <ListItem
                alignItems="flex-start"
                key={index}
                style={{
                  alignItems: "center",
                  backgroundColor: "#1982FC",
                  color: "#FFF",
                }}
              >
                <ListItemAvatar>
                  <Avatar
                    alt="Avatar Image"
                    src="https://source.unsplash.com/random"
                  />
                </ListItemAvatar>
                <ListItemText primary={message.body} />
              </ListItem>
            );
          }
          return (
            <ListItem
              alignItems="flex-start"
              key={index}
              style={{
                alignItems: "center",
                backgroundColor: "#BCBCBC",
                color: "#FFF",
              }}
            >
              <ListItemAvatar>
                <Avatar
                  alt="Avatar Image"
                  src="https://source.unsplash.com/collection/190727/
                  "
                />
              </ListItemAvatar>
              <ListItemText primary={message.body} />
            </ListItem>
          );
        })}
        {/* <Divider variant="inset" component="li" /> */}
      </List>
    </div>
  );
}

export default Messages;
