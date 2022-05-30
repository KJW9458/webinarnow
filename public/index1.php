<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Chat App</title>

    <link
      href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
      rel="stylesheet"
    />

    <link rel="stylesheet" href="style.css" />

    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.1.3/socket.io.js"
      integrity="sha512-PU5S6BA03fRv1Q5fpwXjg5nlRrgdoguZ74urFInkbABMCENyx5oP3hrDzYMMPh3qdLdknIvrGj3yqZ4JuU7Nag=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    ></script>
  </head>

  <body>
    <div class="app">
      <div class="chat_app">
        <div id="sidebar" class="left_sidebar">
          <div class="logo_text">
            <span>Chat <span class="colored">App</span></span>
          </div>

          <span class="user_label">Users</span>
          <div id="active_users_list" class="active_users_list"></div>
        </div>

        <div class="chat_area">
          <div class="chat_bg">
            <div id="chat" class="chat"></div>

            <div class="chat_input">
              <input type="hidden" id="room_name" value="">
              <input type="text" id="messageInput" placeholder="Enter message" />
              <button id="send_message_btn" class="send_message_btn" id="send">
                SEND
              </button>
            </div>
          </div>
        </div>

        <div class="right_sidebar">
          <span class="room_label">Rooms</span>
          <div id="active_rooms_list" class="active_rooms_list"></div>

          <div class="room_input">
            <input type="text" id="roomInput" placeholder="Create room" />
            <button id="room_add_icon_holder" class="room_add_icon_holder">
              +
            </button>
          </div>
        </div>
      </div>
    </div>

    <script src="app.js"></script>
  </body>
</html>
