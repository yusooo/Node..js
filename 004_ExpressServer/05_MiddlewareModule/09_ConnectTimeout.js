// connect-timeout : 지정된 시간 동안 클라이언트의 요청에 대한 응답을 못 할 경우 연결종료(=타임아웃) 기능 제공

// 전역설정
const expres = require("express");
const timeoutt = require("connect-timeout");

// 라우터 별로 타임아웃 지정이 추천됨
const express = require("express");
const timeout = require("connect-timeout");

const app = express();

app.use(timeout("5s")); // 모든 라우터에 대해 5초의 타임아웃을 설정함

app.post(
  "/save",
  timeout("5s"),
  express.json(),
  haltOnTimedout,
  function (req, res, next) {
    savePost(req.body, function (err, id) {
      if (err) return next(err);
      if (req.timedout) return;
      res.send("saved as id" + id);
    });
  }
);

function haltOnTimedout(req, res, next) {
  if (!req.timedout) next();
}

function savePost(post, cb) {
  setTimeout(function () {
    cb(null, (Math.random() * 40000) >>> 0);
  }, (Math.random() * 7000) >>> 0);
}

app.listen(3000);
