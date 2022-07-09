// app.route() -> get, post, put 등 라우트 메소드를 한 곳에서 작성 가능
// 모듈식 라우트 작성 -> 중복성 감소, 코드 관리의 효율성 증가

const { appendFile } = require("fs");

// 모듈식 라우터 - 하나의 라우트 경로로 각 라우트 메소드 처리
app
  .route("/customer")
  .get(function (req, res) {
    // HTTP 메소드 GET 요청에 대한 조회 처리
    res.send("고객 정보 조회");
  })
  .post(function (req, res) {
    // HTTP 메소드 POST 요청에 대한 저장 처리
    res.send("신규 고객 추가");
  })
  .put(function (req, res) {
    // HTTP 메소드 PUT 요청에 대한 수정 처리
    res.send("고객 정보 수정");
  })
  .delete(function (req, res) {
    // HTTP 메소드 DELETE 요청에 대한 삭제 처리
    res.send("고객 정보 삭제");
  });
