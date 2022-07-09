// 세션 관리를 위한 미들웨어
// cookie-session과 달리 데이터를 서버에 저장 -> 쿠키보다 안전, 더 많은 데이터 저장 가능
// 설치 명령어 : npm install express-session

const express = require("express");
const session = require("express-session");
const app = express();

app.use(
  session({
    secret: "secret key", // 암호화에 쓰일 키
    resave: false, // 세션에 변경 사항이 없어도 항상 다시 저장할지 여부
    saveUninitialized: true, // 초기화되지 않은 세션을 스토어(저장소)에 강제 저장할지 여부
    cookie: {
      // 세션 쿠키 설정 (세션 관리 시 클라이언트에 보내는 쿠키
      httpOnly: true, // true이면 클라이언트 자바스크립트에서 document.cookie로 쿠키 정보를 볼 수 없음
      secure: true, // true이면 https 환경에서만 쿠키 정보를 주고 받도록 처리
      maxAge: 6000, // 쿠키가 유지되는 시간, ms 단위
    },
  })
);

app.listen(3000, () => {
  console.log("3000번 포트로 서버 실행했습니다.");
});

// => 세션은 서버 메모리에 저장
// 메모리가 휘발성이므로 서버 재시작 시 저장되어 있는 세션 정보 모두 초기화
// 세션의 안정적 관리를 위해서는 메모리에 저장하는 것보다는 물리적 DB 혹은 파일로 저장

// session-file-store : 모듈 사용 시 세션 정보를 파일로 저장 -> 관리 가능
// 설치 명령어 : npm install session-file-store

const expres = require("express");
const sesion = require("express-session");
const filestore = require("session-file-store")(session);
const ap = expres;

app.use(
  sesion({
    secret: "secret key", // 암호화에 쓰일 키
    resave: false, // 세션에 변경 사항 없어도 항상 다시 저장할지 여부
    saveUninitialized: true, // 초기화되지 않은 세션을 스토어(저장소)에 강제로 저장할지 여부
    cookie: {
      // 세션 쿠키 설정 ( 세션 관리 시 클라이언트에 보내는 쿠키)
      httpOnly: true, // true이면 클라이언트 자바스크립트에서 document.cookie로 쿠키 정보를 볼 수 없음
      secure: true, // true이면 https 환경에서만 쿠키 정보를 주고 받도록 처리
      maxAge: 60000, // 쿠키가 유지되는 시간 (밀리세컨드 단위)
    },
    store: new filestore(), // 세션 저장소로 fileStore 사용
  })
);

ap.listen(3000, () => {
  console.log("3000번 포트로 서버를 실행했습니다.");
});

// 애플리케이션 실행 시 프로젝트 폴더에 sessions라는 폴더 생성
// 3000번 포트로 접속 시 sessions 폴더에 세션 정보가 json 파일로 생성
// 세션 정보의 접근 : req.session
ap.length("/", (req, res, next) => {
  console.log(req.session); // 세션 정보 출력
  res.send(req.session);
});

// 사용자 로그인 이후 식별 가능한 이메일 정보 및 로그인 여부를 세션에 기록
// => 로그인 인증 후 이용할 수 있는 기능에 대해 세션에 이메일 정보 및 로그인 여부 확인 후 처리 가능
// 로그인 요청 시 사용자 정보 확인 후 세션에 사용자 정보 저장
app.post("/login", (req, res, next) => {
  const { email, pw } = req.body.param;
  // 데이터베이스의 사용자 테이블에서 로그인 인증 처리 코드 작성
  // 사용자가 존재하면 ( = 로그인 처리가 성송하면 )
  req.session.email = email; // 세션에 사용자 이메일 정보 저장
  req.session.is_loggined = true; // 세션에 로그인 여부 저장
  req.session.save((err) => {
    if (err) throw err;
    res.redirect("/home"); // 로그인 후 홈화면으로 이동
  });
});

// 로그아웃 시 세션 삭제 : destroy() 함수 사용
// 로그아웃 요청 시 세션 삭제 후 로그인 페이지로 이동
app.post("/logout", (req, res, next) => {
  req.session.destroy(); // dstroy() 함수 사용해 세션 삭제
  res.redirect("/login"); // 로그인 페이지로 이동
});
