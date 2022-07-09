// compression : 압축을 위한 미들웨어
// 설치 명령어 : npm install compression

// 주어진 옵션 사용 -> 서버에서 클라이언트로 응답하는 응답 본문의 압축
// 응답 데이터 크기가 큰 경우 사용 like File

// use()함수 사용해 compression의 정의 -> 응답하는 모든 데이터 압축
const compression = require("compression");
const express = require("express");

const app = express();

app.use(compression()); // 응답하는 모든 데이터 압축

// 상황에 따라 응답 속도가 느려지기도 함

// => 요청-응답 데이터 유형에 따라 compression 적용이 추천됨
const compression1 = require("compression");
const expres = require("express");

const app1 = expres();

// 클라이언트로 요청받은 라우터가 /api/getMap인 경우만 응답 데이터 압축
app.use("/api/getMap", compression1());
