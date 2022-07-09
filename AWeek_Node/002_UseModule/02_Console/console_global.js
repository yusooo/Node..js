console.log("hello world"); // 일반적 로그
console.log("hello %s", "world"); // 일반적 로그, %s를 사용 -> 문자열 데이터를 파라미터로 전달

const world = "world";
console.log(`hello ${world}`); // 자바스크립트의 템플릿 리터럴 문법 사용 : 백틱(`)사용

console.error(new Error("에러 메시지 출력")); // 에러 로그 출력

const arr = [
  { name: "John Doe", email: "john@mail.com" },
  { name: "Jeremy Go", email: "jeremy@mail.com" },
];
console.table(arr); // 테이블 형태로 배열 / 오브젝트 데이터 출력

const obj = {
  students: {
    grade1: { class1: {}, class: {} },
    grade2: { class1: {}, class: {} },
    teachers: ["John Doe", "Jeremy Go"],
  },
};

console.dir(obj, { depth: 1, colors: true });
// 오브젝트 콘솔 출력 : 출력할 오브젝트의 깊이와 콘솔 메시지 텍스트에 색상 적용

console.time("time for for-loop");
// console.time에 파라미터로 전달한 레이블과 뒤에 나오는 console.timeEnd 중
// 일치하는 레이블을 가지고 있는 console.timeEnd 코드 사이의 실행 시간 측정
for (let i = 0; i < 999999; i++) {}
console.timeEnd("time for for-loop");
// 앞에 나온 console.time 중 console.timeEnd와
// 레이블이 일치하는 코드 사이의 실행 시간 측정

// console.log(내용, ...args) : 일반적인 로그 콘솔 출력
// console.error(내용, ...args) : 에러 콘솔 출력
// console.table(테이블형 데이터) : 배열/오브젝트(객체)를 테이블 형태 콘솔 출력
// console.time(레이블) / console.timeEnd(레이블) : console.time과 console.timeEnd에 전달한 인수값 일치 코드 사이 실행시간 측정 -> 출력 (기본값 default)
// console.dir(오브젝트, 옵션) : 객체 콘솔 출력 / 첫 파라미터 -> 객체, 두번째 파라미터 -> 옵션
//    옵션 내의 depth : 객체 내 객체를 몇 단계까지 출력?
//    콘솔 출력 시 다른 색상 사용 -> 구분 용이
