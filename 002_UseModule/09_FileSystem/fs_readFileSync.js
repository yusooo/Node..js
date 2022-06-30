// fs.readFileSync(path, [options])

// 파일path을 옵션으로 지정한 문자 인코딩 이용 -> utf8 형식으로 읽은 후 결과 반환
// 동기방식 함수

const fs = require("fs");
// 동기 파일 읽기
var text = fs.readFileSync("./sample/text.txt", "utf8");
console.log(text);
