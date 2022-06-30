const myURL = new URL(
  "https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash"
);
console.log(myURL);
/* URL {
        href: 'thhps://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash',
        origin: 'https://sub.example.com:8080',
        protocol: 'https:',
        username: 'user',
        password: 'pass',
        host: 'sub.exaple.com',
        port: '8080',
        pathname: 'p/a/t/h',
        search: '?query=string',
        searchParams: URLSearchParams { 'query' => 'string' },
        hash: '#hash'
    }
*/

// 각각의 속성 구현 : 클래스 프로토타입의 getter 및 setter

const myURL1 = new URL("https://example.org/foo#bar");
console.log(myURL1.hash);
// #bar

myURL1.hash = "baz";
console.log(myURL1.href);
// https://example.org/foo#baz

// URL 모듈의 최다 사용 예시 = 주어진 url 정보에서 전달된 쿼리 데이터 추출
// 속성 정보 중 serachParams : URLSearchParams 클래스로 쿼리 데이터 조작을 위한 내장 함수 제공
const myURL2 = new URL("https://example.org/?user=abc&query=xyz");
console.log(myURL2.searchParams.get("user")); // 키에 해당하는 첫 번째 값의 반환
console.log(myURL2.searchParams.has("user")); // 키가 존재하는지 체크, 있으면 true / 없으면 false
console.log(myURL2.searchParams.keys()); // Iterator로 모든 키 반환
console.log(myURL2.searchParams.values()); // Iterator로 모든 값 반환
myURL2.searchParams.append("user", "admin"); // 주어진 키로 값 추가, 동일한 키가 이미 존재 -> 그대로 유지 & 하나 추가
console.log(myURL2.searchParams.getAll("user")); // 키에 해당하는 값 모두 배열로 반환
myURL2.searchParams.set("user", "admin"); // 주어진 키로 값 추가, 동일한 키가 이미 존재 -> 모두 삭제 & 새로 추가
myURL2.searchParams.delete("user"); // 해당 키 삭제
console.log(myURL2.searchParams.toString()); // serachParams 객체를 문자열로 반환
