const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);

const PORT = 3001;

const io = require("socket.io")(server, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  console.log("Connection established!");

  socket.emit("your id", socket.id);
  socket.on("message", (message) => {
    console.log("Message received: " + message);

    io.emit("message", message);
  });
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});
