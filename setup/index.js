import app from "./app.js";
import { connectDB } from "../config/db.js";
import { createServer } from "http";
import { Server } from "socket.io";
connectDB();
const port = 4000;
const httpServer = createServer(app);
const io = new Server(httpServer, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  console.log("Connection established");

  getApiAndEmit(socket);
  socket.on("disconnect", () => {
    console.log("Disconnected");
  });
});
const getApiAndEmit = (socket) => {
  const response = "response you need";
  socket.emit("FromAPI", response);
};
httpServer.listen(port, function () {
  var port = httpServer.address().port;
  console.log("Running on : ", port);
});
