const http = require('http');

http.createServer((req, res)=>{
    console.log(req.url, req.headers.cookie); // req 객체에 담겨 있는 쿠키를 가져옴(req.headers.cookie) / req.headers = 요청 헤더
    res.writeHead(200, {'Set-Cookie':'mycookie=test'}); // res.writeHead : 응답의 헤더에 쿠키 기록 / Set-Cookie : 브라우저에게 콜론 이후 값의 쿠키 저장 명령
    res.end('Hello Cookie');
})
    .listen(8083, ()=>{
        console.log('8083번 포트에서 서버 대기중입니다!');
    })