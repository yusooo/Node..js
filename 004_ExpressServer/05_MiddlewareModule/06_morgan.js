// morgan : HTTP 요청에 대한 로그를 관리하는 미들웨어
// 설치 명령어 : npm install morgan

const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("combined"));

app.get("/", function (req, res) {
  res.send("hello, world!");
});

app.listen(8080);

// HTTP 요청 로그를 파일로 생성해서 기록
const expres = require("express");
const fs = require("fs");
const morgan = require("morgan");
const path = require("path");

const ap = expres();

// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "access.log"),
  { flags: "a" }
);

// setup the logger
app.use(morgan("combined", { stream: accessLogStream }));

app.get("/", function (req, res) {
  res.send("hello, world!");
});

app.listen(8080);
