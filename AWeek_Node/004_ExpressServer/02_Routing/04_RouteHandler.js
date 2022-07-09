// 클라이언트 요청에 따라 라우트가 일치할 때 실행되는 콜백함수

const { runMain } = require("module");
const { runInContext } = require("vm");

/*
    파라미터
        req : Request
        res : Response
        next : 다음 미들웨어 함수를 가리키는 오브젝트
*/
app.get("/contact", function (req, res) {
  res.send("contact");
});

// 하나의 라우트에서 next 오브젝트를 사용해서 2개 이상의 콜백함수 실행 가능
// 콜백 함수의 세 번째 파라미터로 next 오브젝트 사용
app.get(
  "/example",
  function (req, res, next) {
    console.log("첫 번째 콜백 함수");
    next(); // 다음 콜백 함수 호출
  },
  function (req, res) {
    res.send("두 번째 콜백 함수"); // 클라이언트로 응답
  }
);

// 콜백 함수 배열로 라우트 처리 예시
const ex0 = function (req, res, next) {
  console.log("첫 번째 콜백 함수");
  next(); // 다음 콜백 함수 호출
};

const ex1 = function (req, res, next) {
  console.log("두 번째 콜백 함수");
  next(); // 다음 콜백 함수 호출
};

const ex2 = function (req, res, next) {
  res.send("세 번째 콜백 함수"); // 클라이언트로 응답
};

app.get("/examples", [ex0, ex1, ex2]); // 콜백 함수 배열로 정의
