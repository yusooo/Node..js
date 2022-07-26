const http = require('http'); // http 모듈 : 웹 브라우저의 요청 처리; createServer 메소드 포함
// createServer 메소드 : 인수로 요청에 대한 콜백 함수를 받음 / 요청마다 콜백 함수 실행 => 콜백함수에 응답 작성
// 콜백 부분에는 req, res 매개변수 포함

http.createServer((req, res)=>{ // req = request/요청 관련 정보, res = response/응답 관련 정보
    // 응답 적기
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server</p>');
})
    .listen(8080, ()=>{ // 서버 연결
    console.log('8080번 포트에서 서버가 대기 중입니다!');
})

