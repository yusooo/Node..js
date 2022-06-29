import process from "process";

process.on("beforeExit", (code) => {
  console.log(
    "2. 이벤트 루프에 등록된 작업이 모두 종료된 후 노드 프로세스를 종료하기 직전: ",
    code
  );
});

process.on("exit", (code) => {
  console.log("3. 노드 프로세스가 종료될 때: ", code);
});

console.log("1. 콘솔에 출력되는 첫 번째 메시지");

// 콘솔에 출력되는 순서
// 1. 콘솔에 출력되는 첫 번째 메시지
// 2. 이벤트 루프에 등록된 작업이 모두 종료된 후 노드 프로세스를 종료하기 직전 : 0
// 3. 노드 프로세스가 종료될 때 : 0

// ---
// process.env
//  사용자 환경 포함 객체 반환

// process.nextTick
const { nextTick } = require("process");

console.log("start");

setTimeout(() => {
  console.log("timeout callback");
}, 0);

nextTick(() => {
  console.log("nextTick callback");
});

console.log("end");

// 콘솔창 출력 순서
// start
// end
// nextTick callback
// timeout callback

// ---
// process.exit()
//  실행중인 Node.js 프로세스 종료
//  if 서버 구동중 -> 함수 호출 시 서버 멈춤
