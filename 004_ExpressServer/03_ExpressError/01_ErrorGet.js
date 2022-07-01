// 라우트 에러 발생 -> 익스프레스 자동 처리 & 에러 코드 및 에러 정보 클라이언트로 응답

const { appendFile } = require("fs");

app.get("/error", function (req, res) {
  throw new Error("에러 발생"); // 라우트 에러 발생 -> 익스프레스 자동 처리
  // 클라이언트 : 500 에러코드 & 에러 정보 전달
});

// 익스프레스 : 앱에서 발생할 수 있는 모든 에러 처리하는 에러 핸들러 내장
// 에러 핸들러 사용 -> 앱에서 에러 발생 시 한 군데서 에러 처리 가능 -> 더욱 효율적
// 에러 처리를 위한 미들웨어 함수 정의 ( 파라미터 : err, req, res, next => 총 4개)

// 에러 처리 핸들러 미들웨어 함수
app.use(function (err, req, res, next) {
  res.status(500).json({ statusCode: res.statusCode, errMessage: err.message });
  // 상태코드 500, 에러 메시지 전달
});
app.get("/error2", function (req, res, next) {
  next(new Error("에러 발생")); // next() 함수를 사용 -> 에러 처리 핸들러로 에러 전달
});
