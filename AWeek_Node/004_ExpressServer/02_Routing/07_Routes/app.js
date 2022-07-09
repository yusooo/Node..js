const express = require("express");
const customerRoute = require("./routes/customer"); // customer 라우트를 추가
const productRoute = require("./routes/product"); // product 라우트를 추가
const app = express();

app.use(
  express.json({
    limit: "50mb", // 최대 50메가
  })
); // 클라이언트 요청 body를 json으로 파싱 처리

app.listen(3000, () => {
  // 3000번 포트로 웹 서버 실행
  console.log("Server started.port 3000.");
});

app.use("/customer", customerRoute); // customer 라우트를 추가하고 기본 경로로 /customer 사용
app.use("/product", productRoute); // product 라우트를 추가하고 기본 경로로 /product 사용

/*
  라우트 모듈 분리 -> 라우트의 기능별 관리 가능
    각각의 개발자가 기능별로 분리된 라우트 파일의 각자 관리, 업무의 명확한 구분
    운영 및 유지보수 측면에서 관리 용이
*/
