const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const PORT = 3001;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
