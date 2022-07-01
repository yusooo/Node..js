const express = require("express");
const app = express();
const port = 3000; // 서버 포트 번호

// 클라이언트에서 HTTP 요청 메소드 중 GET을 이용해서 'host:port'로 요청을 보내면 실행되는 라우트
app.get("/", (req, res) => {
  res.send("Hello world!"); // 서버에 띄우는 메시지
});

// app.listen() 함수 사용 -> 서버 실행
// 클라이언트는 'host:port' 사용해 노드 서버에 요청 전송 가능
app.listen(port, () => {
  console.log(`서버가 실행됩니다. http://localhost:${port}`);
});
