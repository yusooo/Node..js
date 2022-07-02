app.use(express.static("public")); // public 폴더에 있는 모든 정적 파일을 URL로 제공할 수 있게 됨

// => public 폴더의 파일을 브라우저 통해 로드 가능
/*
http://localhost:3000/css/style.css
http://localhost:3000/images/logo.jpg
http://localhost:3000/js/common.js
*/
