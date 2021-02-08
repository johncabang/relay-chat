import React from "react";
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core/";

function Messages({ messages }) {
  return (
    <List>
      {messages.flatMap((message, index) => [
        <ListItem alignItems="flex-start" key={index}>
          <ListItemAvatar>
            <Avatar
              alt="Remy Sharp"
              src="https://placeimg.com/200/200/animals"
            />
          </ListItemAvatar>
          <ListItemText primary="Brunch this weekend?" />
        </ListItem>,
        <Divider variant="inset" component="li" key={"divider-" + index} />,
      ])}
    </List>
  );
}

export default Messages;
