// 모듈 추가
// const {내보냈던 내용물 중 선택} = require("./가져올파일명");
const { add, minus, defaultNum } = require("./calculator");

// 재정의할 필요 없이 곧바로 사용 가능
console.log(add(7, 2));
console.log(minus(7, 2));
console.log(defaultNum);
