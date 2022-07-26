const http = require('http');
const fs = require('fs').promises;

const users={}; // 데이터 저장용 ( DB 대용으로 객체 선언 )

// req.method로 HTTP 요청 메소드의 구분
// 메소드가 GET일 경우 req.url로 요청 주소를 구분 
//  => 미존재 파일 요청 혹은 GET 메소드 요청이 아닐 경우 404 에러 응답
//     응답 과정에 에러 발생 시 500 에러 응답
http.createServer(async (req, res)=>{
    try{
        console.log(req.method, req.url);
        if(req.method === 'GET'){
            if(req.url==='/'){
                const data = await fs.readFile('./restFront.html');
                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'});
                return res.end(data);
                // res.end 앞에 return을 붙이는 이유 
                //  return이 없는 한 함수는 종료되지 X 
                //  => res.end 메소드의 실행이 여러 번 이어질 경우 Error : Can't set headers after they are sent to the client 에러 발생
            }else if(req.url === '/about'){
                const data = await fs.readFile('./about.html');
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                return res.end(data);
            }else if(req.url === '/users'){
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                return res.end(JSON.stringify(users));
            }
            // 주소가 /도 /about도 아니면
            try{
                const data = await fs.readFile(`.${req.url}`);
                return res.end(data);
            }catch(err){
                // 주소에 해당하는 라우트를 못 찾았다는 404 Not Found error 발생
            }
        }else if(req.method === 'POST'){ // req.on('data'), req.on('end')의 사용 : 요청 본문에 들어 있는 데이터를 꺼내기 위한 작업
            if(req.url === '/user'){
                let body='';
                // 요청의 body를 stream 형식으로 받음
                req.on('data', (data)=>{
                    body+=data;
                });
                // 요청의 body를 다 받은 후 실행됨
                return req.on('end', ()=>{
                    console.log('POST 본문(Body):', body);
                    const id = Date.now();
                    users[id] = name;
                    res.writeHead(201);
                    res.end('등록 성공');
                });
            }
        }else if(req.method === 'PUT'){
            if(req.url.startsWith('/user/')){
                const key = req.url.split('/')[2];
                let body='';
                req.on('data', (data)=>{
                    console.log('PUT 본문(Body):', body);
                    users[key]=JSON.parse(body).name;
                    return res.end(JSON.stringify(users));
                });
            }
        }else if(req.method === 'DELETE'){
            if(req.url.startsWith('/user/')){
                const key = req.url.split('/')[2];
                delete users[key];
                return res.end(JSON.stringify(users));
            }
        }
        res.writeHead(404);
        return res.end('NOT FOUND');
    } catch(err){
        console.error(err);
        res.writeHead(500, {'Content-Type': 'text/plain; charset=utf-8'});
        res.send(err.message);
    }
})
    .listen(8082, ()=>{
        console.log('8082번 포트에서 서버 대기 중입니다');
    });