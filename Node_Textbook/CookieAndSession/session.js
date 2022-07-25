const http = require('http');
const fs = require('fs').promises;
const url = require('url');
const qs = require('querystring');

const parseCookies = (cookie = '')=>
    cookie 
        .split(';')
        .map(v=>v.split('='))
        .reduce((acc, [k, v])=>{
            acc[k.trim()] = decodeURIComponent(v);
            return acc;
        }, {});

const session={};

http.createServer(async(req, res)=>{
    const cookies = parseCookies(req.headers.cookie);
    if(req.url.startsWith('/login')) {
        const {query} = url.parse(req.url);
        const {name} = qs.parse(query);
        const expires = new Date();
        expires.setMinutes(expires.getMinutes() + 5);
        const uniqueInt = Date.now();
        session[uniqueInt] = {  // session 객체에 사용자명과 만료시간 대신 저장 (실제 서버에서는 변수에 저장 X => Redis나 Memcached 등의 DB에 저장)
            name,
            expires,
        };
        res.writeHead(302, {
            Location: '/',
            'Set-Cookie' : `session=${uniqueInt}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
        });
        res.end();
        //세션 쿠키의 존재 && 만료기간이 지나지 않은 경우
    }else if(cookies.session && session[cookies.session].expires>new Date()){
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end(`${session[cookies.session].name}님 안녕하세요`);
    }else{
        try{
            const data=await fs.readFile('./cookie2.html');
            res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
            res.end(data);
        }catch(err){
            res.writeHead(500, {'Content-Type': 'text/plain; charset=utf-8'});
            res.end(err.message);
        }
    }
})
    .listen(8085, ()=>{
        console.log('8085번 포트에서 서버 대기중입니다!');
    });