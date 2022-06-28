const defaultNum = 1; // 상수 선언 : const (상수이름) = (초기값)
function add(num1, num2) {
  // 함수 선언 : function (함수이름)(매개변수){}
  return num1 + num2;
}
function minus(num1, num2) {
  return num1 - num2;
}
function mul(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}
module.exports = {
  // 모듈 내보내기는 module.exports{}를 활용
  defaultNum, // 대괄호 안에 있는 내용물을 같은 폴더의 다른 파일에서도 사용 가능
  add,
  minus,
  mul,
  divide,
};
