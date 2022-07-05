// CORS : Cross-Origin Resource Sharing / 추가 HTTP 헤더 사용해 도메인 or 포트가 다른 서버의 자원에 접근 가능 권한 부여 체제
// Node.js로 웹 서버 별도 구성의 경우 클라이언트와 도메인or포트가 별도의 서버로 구동 -> 클라이언트의 요청이 브라우저 보안 문제로 정상적 접근 불가능

// CORS 도메인과 포트 지정 -> 권한 있는 클라이언트만 접근 가능하도록 접근 권한 부여 및 관리 가능한 미들웨어
// 설치 명령어 : npm install cors

// Origin : 브라우저에서 URL 구조의 프로토콜, 호스트, 포트를 합친 것
// 브라우저의 개발자 도구의 콘솔 창에서 location.origin 실행 시 출처 가능
// > Cross-Origin : 서로 다른 Origin출처 = 프로토콜, 도메인, 포트 중 하나라도 다르면 다른 출처로 인식 => CORS 미설정 시 접근 불가

const express = require("express");
const cors = require("cors");
const app = express();

const corsOptions = {
  origin: "http://example.com", // 허용 도메인 설정
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions)); // cors를 모든 라우터에 적용

app.get("/products/:id", function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});

app.listen(80, function () {
  console.log("CORS-enabled wev server listening on port 80");
});

// 특정 라우터에만 적용
const expres = require("express");
const corss = require("cors");
const ap = expres();

const corssOptions = {
  origin: "http://example.com", // 허용할 도메인 설정
  optionsSuccessStatus: 200,
};

app.get("/products/:id", corss(corssOptions), function (req, res, next) {
  // 특정 라우터에만 cors 적용
  res.json({ msg: "This is CORS-enabled for only example.com." });
});

app.listen(80, function () {
  console.log("CORS-enabled web server listening on port 80");
});
