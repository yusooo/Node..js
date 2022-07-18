const http = require('http');

http.createServer((req, res)=>{ // req = request/요청 관련 정보, res = response/응답 관련 정보
    // 응답 적기
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server</p>');
})
    .listen(8080, ()=>{ // 서버 연결
    console.log('8080번 포트에서 서버가 대기 중입니다!');
})
