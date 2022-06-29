const { clearInterval } = require("timers");

const timeout = setTimeout(() => {
  console.log("1초 후에 실행됩니다.");
}, 1000);

const interval = setInterval(() => {
  console.log("1초마다 실행됩니다.");
}, 1000);

const immiediate = setImmediate(() => {
  console.log(
    "setImmediate() 함수 호출 뒤에 오는 모든 코드를 먼저 실행하고 바로 다음에 실행합니다."
  );
});

console.log("setImmediate보다 먼저 실행됩니다.");

setTimeout(() => {
  clearInterval(interval); // 변수명이 interval인 1초마다 콘솔창에 출력하기 위해 정의한 setInterval() 함수를 종료합니다.
}, 3000);

// 1초 = 1000밀리초
// setTimeout(콜백함수, 밀리초) : 설정한 밀리초 이후 지정된 콜백함수 실행
//    clearTimeout(변수명) : setTimeout 선언 시 할당한 변수명 사용해 setTimeout 취소
//    정확하게 밀리초 이후 실행된다는 보장 X <= 이벤트 루프의 블로킹 or 이벤트 큐에 보유 중인 다른 실행코드가 타임아웃의 실행 미룸
//    일찍 실행은 X, 미뤄질 수는 O
// setInterval(콜백함수, 밀리초) : 설정한 밀리초마다 지정된 콜백함수 실행
//    clearInterval(변수명) : setInterval 선언 시 할당한 변수명 사용해 setInterval 취소
// setImmediate(콜백함수) : 현재 이벤트 루프 주기 끝 -> 코드 실행
//    setImmediate() 함수 호출 이후 오는 모든 코드가 실행된 이후 바로 다음 실행
//    clearImmediate(변수명) : setImmediate() 선언 시 할당한 변수명 사용해 setImmediate 취소
