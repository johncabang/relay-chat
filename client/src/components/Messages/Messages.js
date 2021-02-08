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
    <List>
      {messages.map((message, index) => {
        if (message.id === yourID) {
          return (
            <ListItem alignItems="flex-start" key={index}>
              <ListItemAvatar>
                <Avatar
                  alt="Avatar Image"
                  src="https://placeimg.com/200/200/animals"
                />
              </ListItemAvatar>
              <ListItemText primary={message.body} />
            </ListItem>
          );
        }
        return (
          <ListItem alignItems="flex-start" key={index}>
            <ListItemAvatar>
              <Avatar
                alt="Avatar Image"
                src="https://placeimg.com/200/200/animals"
              />
            </ListItemAvatar>
            <ListItemText primary={message.body} />
          </ListItem>
        );
      })}

      {/* <Divider variant="inset" component="li" /> */}
    </List>
  );
}

export default Messages;
