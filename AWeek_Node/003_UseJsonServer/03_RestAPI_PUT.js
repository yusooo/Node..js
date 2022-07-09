// PUT 요청
fetch("http://loccalhost:3000/posts/2", {
  method: "PUT", // HTTP 요청방법
  body: JSON.stringify({
    // 전송할 데이터
    id: 2,
    title: "The Great Jeremy",
    author: "Jeremy",
  }),
  headers: {
    // 헤더 값 정의
    "content-type": "application/json; charset=UTF-8", // content-type 정의
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
