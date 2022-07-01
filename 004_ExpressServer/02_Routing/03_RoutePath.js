// Route Path : 요청 메소드와의 조합을 통해 요청이 이루어질 수 있는 엔드포인트의 정의
// Make Path : 문자열, 문자열 패턴, 정규식 이용

const { appendFile } = require("fs");

// 문자열 기반 라우트 경로 예시
// 클라이언트에서 HTTP 요청 메소드 GET 방식으로 'host:port' 호출 시
app.get("/", function (req, rs) {
  res.send("root"); // 클라이언트에 root 문자열 전송
});

// 클라이언트에서 HTTP 요청 메소드 GET 방식으로 'host:port/about' 호출 시
app.get("/about", function (req, res) {
  res.send("about"); // 클라이언트에 about 문자열 전송
});

// 클라이언트에서 HTTP 요청 메소드 POST 방식으로 'host:port/customer'를 호출했을 때
app.post("/customer", function (req, res) {
  res.send("customer"); // 클라이언트에 customer 문자열 전송
});

// 문자열 패턴 기반 라우트 경로 예시
// GET 방식으로 'host:port/acd' or 'host:port/abcd' 호출 시
// 'b?'는 문자 'b'가 0개 혹은 1개 있다는 것을 의미
app.get("/ab?cd", function (req, res) {
  res.send("ab?cd");
});

// 클라이언트에서 요청한 라우트 경로가 abcd, abbcd, abbbcd 등과 일치
// 'b+'는 문자 'b'가 1개 이상 있다는 것을 의미
app.get("/ab+cd", function (req, res) {
  res.send("ab+cd");
});

// 클라이언트에서 요청한 라우트 경로가 abcd, abxcd, abanycd, ab123cd 등과 일치
// 'ab*cd'는 문자 'ab'와 문자 'cd' 사이에 문자가 없거나 혹은 어떤 문자도 올 수 있다는 것을 의미
app.get("/ab*cd", function (req, res) {
  res.send("ab*cd");
});

// 클라이언트에서 요청한 라우트 경로가 abe 혹은 abcde와 일치
// '(cd)?'는 문자 'cd'가 0번 혹은 1번 있을 수 있음을 의미
app.get("/ab(cd)?e", function (req, res) {
  res.send("ab(cd)?e");
});

// 정규식 기반 라우트 경로 예시
// 클라이언트에서 요청한 라우트 경로에 'a'가 포함되어 있는 경우
app.get(/a/, function (req, res) {
  res.send("/a/");
});

// 클라이언트에서 요청한 라우트 경로가 문자 'insert'로 시작하는 경우
// inisertCustomer, insertProduct
app.get(/^insert/, function (req, res) {
  res.send("/^insert/");
});
