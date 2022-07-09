// fs.readFile(path, [options], callback)

// 파일path을 옵션 지정한 문자 인코딩utf9 사용 -> 읽은 후 결과를 callback() 함수로 전달
// 비동기 방식 함수

const fs = require("fs");
// 비동기 파일 읽기
fs.readFile("./sample/text.txt", "utf8", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});
