const http = requrie('http');

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-type':'text/html; charset=utf-8'});
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server</p>');
});
server.listen(8080);
server.on('listening', ()=>{
    console.log('8080번 포트에서 서버가 대기 중입니다!');
});
server.on('error', (error)=>{
    console.log(error);
});