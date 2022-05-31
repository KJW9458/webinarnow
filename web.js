const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const mysql = require("mysql");

var connection = mysql.createConnection({
  host  : 'chatroom.cafe24app.com',
  user  : 'studioyamyam2',
  password : 'assa2589!@',
  port  : 3306,
  database : 'studioyamyam2'
});

// connection.connect();

// connection.end();

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Global variables to hold all usernames and rooms created
var usernames = {};
// 방 배열 선언
//var rooms = [];
var rooms =[{ name: "global", creator: "관리자" },
            { name: "chess", creator: "관리자" }]
// { name: "global", creator: "Anonymous" },
// { name: "chess", creator: "Anonymous" },

// connection.query("SELECT * FROM chat_room", function(err, rows, fields){
//   // DB 테이블에서 방 네임 출력
//   rows.forEach(function(row){
//     // console.log(row.room);
//     // 방 배열에 값 입력
//     rooms.push({name : row.room , creator: row.creator});
//   })
//   // console.log(rooms);
// })

io.on("connection", function (socket) {
  console.log(`User connected to server.`);

  // 유저 닉네임
  socket.on("createUser", function (username) {
    socket.username = username;
    usernames[username] = username;
    socket.currentRoom = "global";
    socket.join("global");
    socket.broadcast
      .to(room)
      .emit(
        "updateChat",
        "INFO",
        socket.username + " 님께서 접속하셨습니다"
      );

    console.log(`User ${username} created on server successfully.`);

    // socket.emit("updateChat", "INFO", "You have joined global room");
    // socket.broadcast
    //   .to("global")
    //   .emit("updateChat", "INFO", username + " has joined global room");
    io.sockets.emit("updateUsers", usernames);
    socket.emit("updateRooms", rooms);
  });

  // 메세지 보낼 때 DB에 채팅 내용 입력
  socket.on("sendMessage", function (data) {
    var today = new Date();

    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    let date = today.getDate();  // 날짜

    let hours = today.getHours(); // 시
    let minutes = today.getMinutes();  // 분
    let seconds = today.getSeconds();  // 초

    var time = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;

    io.sockets.to(socket.currentRoom).emit("updateChat", socket.username, data.msg);
    // connection.query("INSERT INTO chat(id, room, message, datetime) VALUES (?,?,?,?)", [
    //   socket.username, data.room, data.msg, time
    // ]);

    // connection.end();
  });

  // 방만들기
  socket.on("createRoom", function (room) {
    if (room != null) {
      rooms.push({ name: room, creator: socket.username });
      io.sockets.emit("updateRooms", rooms, null);
    }
  });

  // 방 퇴장 후 방 입장
  socket.on("joinRooms", function (room) {
    socket.broadcast
      .to(socket.currentRoom)
      .emit("updateChat", "INFO", socket.username + " 님께서 방을 나가셨습니다.");
    socket.leave(socket.currentRoom);
    socket.currentRoom = room;
    socket.join(room);
    socket.emit("updateChat", "INFO", "" + room + " 방에 접속하였습니다.");
    // 누군가 방 입장 시 전체 메세지 출력
    socket.broadcast
      .to(room)
      .emit(
        "updateChat",
        "INFO",
        socket.username + " 님께서 " + room + " 방에 접속하셨습니다"
      );
  });
  // 채팅 서버 나갈 때
  socket.on("disconnect", function () {
    console.log(`User ${socket.username} disconnected from server.`);
    delete usernames[socket.username];
    io.sockets.emit("updateUsers", usernames);
    socket.broadcast.emit(
      "updateChat",
      "INFO",
      socket.username + "님께서 접속을 종료하셨습니다."
    );
  });
});

// var count = io.of("/socket").in("global").fetchSockets();
// console.log(count.length);

server.listen(8001, function () {
  console.log("Listening to port 8001.");
});

app.use("/", express.static("public"));
app.use("/css", express.static(__dirname + "/public/css/"));
app.use("/js", express.static(__dirname + "/public/js/"));
app.use("/font", express.static(__dirname + "/public/font/"));
app.use("/img", express.static(__dirname + "/public/img/"));
// app.use(app.router);
app.get("/", function(req, res){
  res.sendFile(__dirname + "/public/");
});