// 익스프레스가 지원하는 HTTP 메소드 해당 라우트 메소드
/* 
get, post, put, head, delete, options, trace, copy, lock, mkcol, move, purge,
propfind, proppatch, unlock, report, mkactivity, checkout, merge, m-search,
notify, subscribe, unsubscribe, patch, search, connect
*/

// 클라이언트에서 사용한 HTTP 요청 메소드 = 익스프레스 라우트 메소드 (동일해야함)

const express = require("express");
const app = express();

app.listen(3000, () => {
  // 3000번 포트로 웹 서버 실행
  console.log("Server started. port 3000.");
});

// 클라이언트에서 HTTP 요청 메소드 GET 방식으로 'host:3000/customer'를 호출했을 때
app.get("/customor", function (req, res) {
  res.send("post 요청에 대한 응답");
});

// 웹 서버 개발 시 가장 많이 사용하는 익스프레스 라우트 : get, post, put, delete
// 클라이언트의 사용 HTTP 요청 메소드에 신경쓰지 않고 하나의 메소드만 사용하고 싶을 시
app.all("/customer", function (req, res) {
  res.send("HTTP 요청 메소드 종류에 상관없이 응답");
});
