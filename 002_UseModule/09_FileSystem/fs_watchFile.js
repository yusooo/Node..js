// fs.watchFile(filename[,options], listener)

// 대상이 되는 파일의 변경 사항 여부 감시
// 변경사항 발생 -> 지정한 콜백 리스너 함수 실행

// Node.js 서버 재시작 안 해도 변경된 내용의 즉시 반영

// sql 쿼리면 관리하는 sql.js 파일의 변경사항(쿼리문 수정/추가) 감지 & 반영 코드
const { fstat } = require("fs");
let sql = require("./sql.js"); // 데이터베이스 쿼리문 작성 파일
// sql.js 파일에 변경이 일어났는지 감시 + 변경 발생 시 콜백 리스너 함수 실행
fstat.watchFile(__dirname + "./sql.js", (curr, prev) => {
  console.log("sql 변경 시 재시작 없이 반영되도록 함.");
  delete require, cache[require.resolve("./sql.js")]; // 캐시에 저장되어 있는 파일 삭제
  sql = require("./sql.js"); // sql.js 파일에 변경 발생 시마다 sql.js 재할당
});
