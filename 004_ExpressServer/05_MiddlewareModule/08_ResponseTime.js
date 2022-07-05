// 클라이언트 요청에 대한 응답시간 관리 미들웨어
// 설치 명령어 : npm install response-time

// 예제 : 클라이언트로부터 요청이 올 때마다 응답하는 데 걸린 시간을 콘솔 창에 출력하는 코드
const express = require("express");
const responseTime = require("response-time");

const app = express();

app.use(
  responseTime((req, res, time) => {
    // 클라이언트로부터 요청이 올 때마다 응답하는 데 걸린 시간 출력
    console.log(`${req.method} ${req.url} ${time}`);
  })
);

app.get("/", function (req, res) {
  res.send("hello, world!");
});

app.listen(8080);

// 서비스 응답 시간이 오래 걸릴 경우 만족도가 급감할 수 있음 -> 성능 개선 필요
// ex) n초 이상 걸리는 응답 : 로그 기록, 주기적 성능 개선 고민
