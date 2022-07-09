// 간단한 쿠키 기반 세션관리 미들웨어
// 설치 명령어 : npm install cookie-session

// 사용자 세션 : 쿠키 사용 => 서버 or 클라이언트에 2가지 방법으로 저장 가능
// cookie-session : 쿠키 내에 클라이언트의 세션 데이터 저장
// express-session : 쿠키 내에 클라이언트의 세션 식별자만 저장, 서버의 세션 데이터 -> 데이터베이스 혹은 서버 파일에 저장

// cookie-session : 브라우저의 최대 쿠키 크기 내에서만 저장 가능, 서버 측 데이터베이스/별도의 리소스 필요 X
// 특정 부하 분산 시나리오의 단순화

const cookieSession = requre("cookie-session");
const express = require("express");

const app = express();

app.use(
  cookieSession({
    name: "session",
    keys: [
      /* secret keys */
    ],
    maxAge: 24 * 60 * 60 * 1000, // 24시간 유지
  })
);
