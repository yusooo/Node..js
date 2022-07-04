// body-parser : 요청 본문 구문 해석 -> req.body 속성으로 사용 가능
// 설치 : npm install body-parser
// 주의 : 클라이언트 출처 데이터 중 multi-part(이미지/파일) => 처리 불가, multer 모듈 이용 처리

// 데이터 유형 : json, raw, text, urlencode

// 익스프레스 최상위에서 body-parser 사용
var express = require("express");
var bodyParser = require("body-parser");

var app = express();

// parse application/x-www-from-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json);

// 익스프레스 4.16 이상 버전 이후 body-parser 기능의 익스프레스 내장
// => body-parser 호출 없이 기능 사용 가능
const express = require("express");
const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ encoded: false }));

// parse application/json
app.use(express.json());

// 클라이언트-서버 전송 json 데이터의 최대 크기 제한
app.use(
  express.json({
    limit: "50mb",
  })
); // 클라이언트가 서버로 전송할 수 있는 json 데이터의 최대 크기를 50mb로 지정

// body-parser를 특정 라우트에만 적용
const expres = require("express");
const app = expres();

// json 데이터 파싱을 위한 body-parser
const jsonParser = expres.json();

// urlencoded 데이터 파싱을 위한 body-parser
const urlencodedParser = expres.urlencoded({ extended: false });

// 클라이언트로부터 POST 방식으로 요청된 /login 라우터의 데이터는 urlencodedParser를 사용하는 것으로 정의
app.post("/login", urlencodedParser, function (req, res) {
  res.send("welcome, " + req.body.username);
});

// 클라이언트로부터 POST 방식으로 요청된 /api/users 라우터의 데이터는 jsonParser를 사용하는 것으로 정의
app.post("/api/users", jsonParser, function (req, res) {
  // req.body에서 사용자 정보 획득
});
