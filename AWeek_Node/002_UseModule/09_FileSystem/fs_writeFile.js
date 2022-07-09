// fs.writeFile(path, data, [options], callback)

// 파일path을 [options] 방식 사용 -> data를 쓰고 callback() 함수로 결과 전달
// 비동기 방식 함수

const fs = require("fs");
let data = "파일 쓰기 테스트";
// 비동기 파일 쓰기
fs.writeFile("./sample/text_w.txt", data, "utf8", (err) => {
  if (err) {
    throw err;
  }
  console.log("비동기적 파일 쓰기 완료");
});
