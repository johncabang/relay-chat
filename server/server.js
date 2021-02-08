const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);

const PORT = 3001;

const io = require("socket.io")(server, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  socket.emit("your id", socket.id);
  socket.on("send message", (body) => {
    io.emit("message", body);
  });
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});
