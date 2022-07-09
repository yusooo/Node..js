// GET 요청
fetch("http://localhost:3000/comments")
  .then((Response) => Response.json())
  .then((json) => console.log(json)); // 전체 데이터 조회
fetch("http://localhost:3000/comments/1")
  .then((Response) => Response.json())
  .then((json) => console.log(json)); // id로 조회
fetch("http://localhost:3000/comments?postId=1")
  .then((Response) => Response.json())
  .then((json) => console.log(json)); // query로 postId=1로 조회
