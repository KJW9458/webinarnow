<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>라이브 채팅</title>

    <link
      href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
      rel="stylesheet"
    />

    <link rel="stylesheet" href="/css/style.css" />
    <link rel="stylesheet" href="/font/font.css" />
    <link rel="stylesheet" href="/css/swiper-bundle.min.css">


    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.1.3/socket.io.js"
      integrity="sha512-PU5S6BA03fRv1Q5fpwXjg5nlRrgdoguZ74urFInkbABMCENyx5oP3hrDzYMMPh3qdLdknIvrGj3yqZ4JuU7Nag=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    ></script>
  </head>

  <body>
    <div id="wrapper">
      <header class="sub_header">
        <div class="inner">
            <div class="h_logo"><a href="../index.html"><img src="/img/w_logo.png" alt="웨비나우 로고"></a></div>
            <div class="h_menu">
                <ul class="gnb">
                    <li><a href="../index.html">웨비나우</a></li>
                    <li><a href="../sub/brand.html">브랜드관</a></li>
                    <li><a href="../sub/gallery_now_on.html">진행중 웨비나</a></li>
                    <li><a href="../sub/gallery_next_on.html">대기중 웨비나</a></li>
                    <li><a href="../sub/gallery_closed.html">종료된 웨비나</a></li>
                    <li><a href="../sub/login_partner.html">파트너 존</a></li>
                </ul>
            </div>
            <div class="ham"><img src="/img/w_ham.png" alt="메뉴버튼"></div>
        </div>
      </header>
      <aside>
        <div class="inner">
            <div class="n_top">
                <div class="n_logo"><img src="/img/logo.png" alt="웨비나우 로고"></div>
                <button><img src="/img/close.png" alt="메뉴닫기"></button>
            </div>
            <div class="n_btn">
                <button class="login">로그인</button>
                <button class="join">회원가입</button>
            </div>
            <div class="search_form">
                <input type="search" name="s" class="search_form_text" placeholder="검색어를 입력하세요" value="">
                <button class="search_form_btn"><img src="/img/main_search.png" alt="검색"></button>
            </div>
            <div class="aside_menu">
                <ul>
                    <li><a href="#">마이 웨비나</a></li>
                    <li><a href="#">신청 웨비나 목록</a></li>
                    <li><a href="#">진행중 웨비나</a></li>
                    <li><a href="#">대기중 웨비나</a></li>
                    <li><a href="#">종료된 웨비나</a></li>
                </ul>
                <ul>
                    <li><a href="#">리뷰 입력하기</a></li>
                    <li><a href="#">작성한 리뷰</a></li>
                </ul>
                <ul>
                    <li><a href="#">공지사항</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">1:1문의</a></li>
                    <li><a href="#">이용약관</a></li>
                    <li><a href="#">개인정보처리방침</a></li>
                </ul>
            </div>
            <button class="partner" onclick="">파트너로그인</button>
        </div> 
      </aside>
      <main>
        <section id="sub_wrap">
          <div class="inner">
              <div class="swiper-button-prev"><img src="/img/btn_prev.png" alt=""></div>
              <div class="swiper-button-next"><img src="/img/btn_next.png" alt=""></div>
              <div class="swiper mySwiper">
                  <div class="swiper-wrapper">
                      <div class="swiper-slide"><a href="#"><img src="/img/main_bg.jpg" alt="슬라이더 메인 이미지"></a></div>
                      <div class="swiper-slide"><a href="#"><img src="/img/main_bg.jpg" alt="슬라이더 메인 이미지"></a></div>
                      <div class="swiper-slide"><a href="#"><img src="/img/main_bg.jpg" alt="슬라이더 메인 이미지"></a></div>
                      <div class="swiper-slide"><a href="#"><img src="/img/main_bg.jpg" alt="슬라이더 메인 이미지"></a></div>
                  </div>
                  <div class="swiper-pagination"></div>
                  
              </div>
          </div>
        </section>
        <section class="tit_content">
          <div class="tit_inner">
              <ul class="lnb">
                  <li class="n1 home">HOME</li>
                  <li class="n2 location">웨비나 강의실</li>
              </ul>
              <div class="heading">
                <div class="heading_con">
                    <p class="web">WEBINARNOW</p>
                    <h1>웨비나 강의실</h1>
                </div>
                <div class="search_form">
                    <input type="search" name="s" class="search_form_text" placeholder="검색어를 입력하세요" value="">
                    <button class="search_form_btn"><img src="/img/main_search.png" alt="검색"></button>
                </div>
              </div>
          </div>
        </section>
        <div class="app">
          <div class="inner">
            <div class="chat_app">
              <div class="video_app">
                <!-- <img src="/img/video_img.png" alt=""> -->
                <iframe width="100%" height="1000px" src="https://www.youtube.com/embed/py_phbQxy5Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <!--비디오 영역-->
              <div class="chat_list_area">
                <div class="chat_area">
                  <div class="chat_bg">
                    <div class="chat_talk_head">실시간 채팅창</div>
                    <div id="chat" class="chat">
                      <!--
                        <div class="chat_name">MEMBER NAME</div>
                        <div class="talk_con">
                            <div class="talk_txt">EV 배터리 이슈 및 전고체배터리 현황과 미래전망 세미나</div>
                            <div class="talk_time">14:52</div>
                        </div> -->
                      </div>
                    </div><!--chat-->
        
                    <div class="chat_input">
                      <input type="hidden" id="room_name" value="global">
                      <input type="text" id="messageInput" placeholder="메세지 입력" />
                      <button id="send_message_btn" class="send_message_btn" id="send">
                        보내기
                      </button>
                    </div>
                  </div>
                  <div class="list_area">
                    <div class="list_bg">
                      <div class="chat_list_head">접속자 리스트</div>
                      <div id="active_users_list" class="active_users_list">
                        <!-- <div class="chat_list_con admin_list_con">ADMIN</div>
                        <div class="chat_list_con me_list_con">ME</div>
                        <div class="chat_list_con member_list_con">MEMBER NAME</div> -->
                      </div>
                    </div>
                  </div>
                  <!--접속자 리스트-->
                </div>
                <!--채팅영역-->
  
                
                <div id="active_rooms_list" class="active_rooms_list" style="display:none"></div>
              </div>
            </div>
          </div>
        </div><!--app-->
        <div class="back_con">
          <button onclick="" class="back_btn">BACK</button>
        </div>
      </main>
      <footer>
        <div class="inner">
            <div class="f_con">
                <div class="f_logo"><img src="/img/logo.png" alt="웨비나우 로고"></div>
                <ul class="f_btn">
                    <li><a href="#">회사소개</a></li>
                    <li><a href="#">이용약관</a></li>
                    <li><a href="#">개인정보처리방침</a></li>
                    <li><a href="#">이용안내</a></li>
                </ul>
            </div>
            <ul class="f_company">
                <li>(주)웨비나우</li>
                <li>대표자 대표자</li>
                <li>사업자등록번호 000-00-00000</li>
            </ul>
            <div class="f_info">
                <p class="address">부산광역시 금정구 반송로 357 2층</p>
                <p class="fax">대표전화) 051-123-4567</p>
                <p class="number">팩스) 051-123-4567</p>
            </div>
            <p class="copy">COPYRIGHT© WEBINARNOW ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
    

  </body>
  <script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
  <script src="/js/app.js"></script>
  <script src="/js/script.js"></script>
  <script src="/js/swiper-bundle.min.js"></script>
</html>
<!-- <!DOCTYPE html>
<html>
<head>
    <title>Socket Sender</title>
    <script src="https://cdn.socket.io/3.1.1/socket.io.min.js" integrity="sha384-gDaozqUvc4HTgo8iZjwth73C6dDDeOJsAgpxBcMpZYztUfjHXpzrpdrHRdVp8ySO" crossorigin="anonymous"></script>
</head>
<body onload="redirect()">
<button id="send">Send</button>
<div id="table_container">
</div>
<script language=javascript>
    function redirect(){
        window.location.href = 'index.php';
    }
</script>
<script src="/receiver.js"></script>
</body>
</html> -->
