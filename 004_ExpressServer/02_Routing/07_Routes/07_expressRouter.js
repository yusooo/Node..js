// express.Router 클래스 사용 -> 라우트 처리 파일의 분리, 각각의 기능에 맞게 구현해 사용

const express = require("express");
const router = express.Router();

// 고객 정보 조회를 위한 라우트
// app.js에서 기본 경로에 /customer를 사용하므로 /customer 라우트 경로를 가짐
router.get("/", function (req, res) {
  res.send("customer 라우트 루트");
});

// 고객 정보 추가를 위한 라우트
// app.js에서 기본 경로에 /customer 사용 -> /customer/insert 라우트 경로 가짐
router.post("/insert", function (req, res) {
  res.send("/customer/insert 라우트");
});

// 고객 정보 수정을 위한 라우트
// app.js에서 기본 경로에 /customer를 사용하기 때문에 /customer/update 라우트 경로 가짐
router.put("/update", function (req, res) {
  res.send("/customer/update 라우트");
});

// 고객 정보 삭제를 위한 라우트
// app.js에서 기본 경로에 /customer 사용 -> /customer/delete 라우트 경로 가짐
router.delete("/delete", function (req, res) {
  res.send("/customer/delete 라우트");
});

module.exports = router;
