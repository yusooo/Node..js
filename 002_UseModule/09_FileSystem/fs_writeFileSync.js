// fs.writeFileSync(path, data, [options]);

// 파일[path]을 [options] 방식 사용 -> data 작성
// 동기방식 함수
const fs = require("fs");
let data = "파일 쓰기 테스트";
// 동기 파일 쓰기
fs.writeFileSync("./sample/text_w2.txt", data, "utf8");
console.log("동기적 파일 쓰기 완료");
