// 클라이언트에서 HTTP 요청 메소드 GET 방식으로 'host:port'를 호출했을 때
app.get("/", function (req, res) {
  res.send("Hello World!"); // 클라이언트에 Hello World! 문자열 전송
});

// 클라이언트에서 HTTP 요청 메소드 GET 방식으로 'host:port/about'을 호출했을 때
app.get("/about", function (req, res) {
  res.send("about"); // 클라이언트에 about 문자열 전송
});
