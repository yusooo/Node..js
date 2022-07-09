app.use(express.static("public")); // public 폴더에 있는 모든 정적 파일을 URL로 제공할 수 있게 됨

// => public 폴더의 파일을 브라우저 통해 로드 가능
/*
http://localhost:3000/css/style.css
http://localhost:3000/images/logo.jpg
http://localhost:3000/js/common.js
*/

// 정적 파일 폴더 여럿 이용 <= express.static 미들웨어 함수의 폴더 수만큼 호출
app.use(express.static("public")); // public 폴더에 있는 모든 정적 파일을 URL로 제공할 수 있도록 함
app.use(express.static("files")); // files 폴더에 있는 모든 정적 파일을 URL로 제공할 수 있도록 함

// 미들웨어 함수 통해 제공되는 파일에 대한 경로 앞 가상 경로 추가 :
// 정적 파일 폴더에 대한 마운트 경로 지정
app.use("/static", express.static("public"));
// public 폴더에 있는 파일에 대한 접근 경로 변경
/*
    http://localhost:3000/static/css/style.css
    http://localhost:3000/static/images/logo.jpg
    http://localhost:3000/static/js/common.js
*/
