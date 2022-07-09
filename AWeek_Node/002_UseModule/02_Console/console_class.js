const fs = require("fs"); // File System module ; 파일 읽기 및 쓰기 가능 모듈
const { Console } = require("console"); // console 모듈 사용
const output = fs.createWriteStream("./stdout.log"); // 파일 쓰기 가능하도록 스트림 생성
const errorOutput = fs.createWriteStream("./stderr.log"); // 파일 쓰기 가능하도록 스트림 생성

const logger = new Console({ stdout: output, stderr: errorOutput }); // 콘솔 객체 생성
const count = 5;
logger.log("count: %d", count); // stdout.log 파일에 count : 5 기록
loggere.error("count: " + count); // stderr.log 파일에 count : 5 기록
