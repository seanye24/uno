const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const cors = require("cors");
const Game = require("./Game");

app.use(cors());
app.use(express.static("build"));
app.use(express.json());

let players = [{ name: "benis" }, { name: "bean" }];
const currentGame = new Game();

io.on("connection", (socket) => {
  const fetch = () => {
    console.log(currentGame.getUpdate())
    io.emit("fetch", currentGame.getUpdate());
  };
  socket.on("giveName", (m) => {
    console.log("name given!")
    let freshPlayer = currentGame.addPlayer(m.name);
    socket.emit("giveID",
       { id: freshPlayer.getID() }
    )
    fetch();
  });
  
  console.log("a user connected");
  //   Game.addPlayer('test player');
  //   socket.on('name input', m => {
  //   })
  socket.on("draw", (m) => {
    console.log("draw requested")
    //call back returning the drawn card
    m.id = Number(m.id);
    fetch();
  });
  socket.on("play", (m) => {
    console.log("play requested")
    m.id = Number(m.id);
    currentGame.play(m.id, m.card);
    fetch();
  });
  socket.on("disconnect", (m) => {
    console.log("user disconnected");
    // Game.removePlayer();
  });
});

const errorHandler = () => {
  return null;
};

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
