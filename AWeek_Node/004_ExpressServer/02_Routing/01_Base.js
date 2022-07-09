// 기본적인 라우트 처리 예시
const express = require("express");
const app = express();
// 클라이언트에서 HTTP 요청 메소드 GET 방식으로 'host:port'를 호출했을 때
app.get("/", function (req, res) {
  res.send("root"); // 클라이언트에 root 문자열 전송
});
