var socket = io();

var userlist = document.getElementById("active_users_list");
var roomlist = document.getElementById("active_rooms_list");
var message = document.getElementById("messageInput");
var sendMessageBtn = document.getElementById("send_message_btn");
var roomInput = document.getElementById("roomInput");
var createRoomBtn = document.getElementById("room_add_icon_holder");
var chatDisplay = document.getElementById("chat");

var currentRoom = "global";
var myUsername = "";

// Prompt for username on connecting to server
socket.on("connect", function () {
  myUsername = prompt("사용자 명을 입력하세요.");
  socket.emit("createUser", myUsername);
});

// Send message on button click
sendMessageBtn.addEventListener("click", function () {
  var room = document.getElementById('room_name').value;
  socket.emit("sendMessage", {
    msg : message.value,
    room : room
  });
  message.value = "";
});

// Send message on enter key press
message.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    sendMessageBtn.click();
  }
});

// Create new room on button click
// createRoomBtn.addEventListener("click", function () {
//   socket.emit("createRoom", prompt("Enter new room: "));
//   let roomName = roomInput.value.trim();
//   if (roomName !== "") {
//     socket.emit("createRoom", roomName);
//     roomInput.value = "";
//   }
// });

socket.on("updateChat", function (username, data) {
  var today = new Date();

  let year = today.getFullYear(); // 년도
  let month = today.getMonth() + 1;  // 월
  let date = today.getDate();  // 날짜

  let hours = today.getHours(); // 시
  let minutes = today.getMinutes();  // 분
  let seconds = today.getSeconds();  // 초

  if(hours<10){
    hours = "0" + hours;
  }

  if(minutes<10){
    minutes = "0" + minutes;
  }
  var time = hours + ":" + minutes;
  if (username === "INFO") {
    console.log("Displaying announcement");
    chatDisplay.innerHTML += `<div class="announcement"><span>${data}</span></div>`;
  } else if(username.toLowerCase()==="admin") {
    console.log("Displaying user message");
    chatDisplay.innerHTML += `<div class="chat_talk_con admin_talk_box">
    <div class="chat_name">${username}</div>
    <div class="talk_con">
        <div class="talk_txt">${data}</div>
        <div class="talk_time">${time}</div>
    </div>
  </div>`;
  } else {
    console.log("Displaying user message");
    chatDisplay.innerHTML += `<div class="chat_talk_con ${username === myUsername ? "me" : ""}_talk_box">
    <div class="chat_name">${username}</div>
    <div class="talk_con">
        <div class="talk_txt">${data}</div>
        <div class="talk_time">${time}</div>
    </div>`;

  }

  chatDisplay.scrollTop = chatDisplay.scrollHeight;
});

socket.on("updateUsers", function (usernames) {
  userlist.innerHTML = "";
  console.log("usernames returned from server", usernames);
  for (var user in usernames) {
    if(user.toLowerCase()==="admin"){
      userlist.innerHTML += `<div class="chat_list_con admin_list_con">${user}</div>`;
    } else if(user===myUsername){
      userlist.innerHTML += `<div class="chat_list_con me_list_con">${user}</div>`;
    } else {
      userlist.innerHTML += `<div class="chat_list_con member_list_con">${user}</div>`;
    }
    // userlist.innerHTML += `<div class="user_card">
    //                           <div class="pic"></div>
    //                           <span>${user}</span>
    //                         </div>`;
  }
});

socket.on("updateRooms", function (rooms, newRoom) {
  roomlist.innerHTML = "";

  for (var index in rooms) {
    roomlist.innerHTML += `<div class="room_card" id="${rooms[index].name}"
                                onclick="changeRoom('${rooms[index].name}')">
                                <div class="room_item_content">
                                    <div class="pic"></div>
                                    <div class="roomInfo">
                                    <span class="room_name">#${rooms[index].name}</span>
                                    <span class="room_author">${rooms[index].creator}</span>
                                    </div>
                                </div>
                            </div>`;
  }

  // document.getElementById(currentRoom).classList.add("active_item");
});

function changeRoom(room) {
  if (room != currentRoom) {
    socket.emit("joinRooms", room);
    if(currentRoom!=""){
    document.getElementById(currentRoom).classList.remove("active_item");
    }
    socket.currentRoom=room;
    currentRoom = room;
    document.getElementById(currentRoom).classList.add("active_item");
  }
  document.getElementById("room_name").value = room;
}

function includeHtml() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("webinarnow-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("webinarnow-include-html");
          includeHtml();
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
}