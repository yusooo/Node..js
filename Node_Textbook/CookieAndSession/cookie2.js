const http = require('http');
const fs = require('fs').promises;
const url = require('url');
const qs = require('querystring');

// 1 : 문자열 형식의 쿠키를 JS 객체 형식으로 바꾸는 함수
const parseCookies = (cookie = '') =>
    cookie
        .split(';') // 각 쿠키를 세미콜론으로 구분하므로 세미콜론을 기준으로 split
        .map(v=>v.split('=')) // 이퀄을 활용해 split
        .reduce((acc, [k, v])=>{
            acc[k.trim()] = decodeURIComponent(v);
            return acc;
        }, {});
//

http.createServer(async (req, res)=>{
    const cookies = parseCookies(req.headers.cookie);

// 2 : 주소가 /login으로 시작할 경우 url과 querystring 모듈로 각각 주소 + 주소에 딸린 query 분석
    // 주소의 시작부가 /login일 경우
    if(req.url.startWith('/login')){
        const {query} = url.parse(req.url);
        const {name} = qs.parse(query);
        const expires = new Date();
        // 쿠키 유효 시간을 현재 시간 + 5분으로 설정
        expires.setMinutes(expires.getMinutes()+5);
        res.writeHead(302, { // 리다이렉트
            Location: '/',
            'Set-Cookie': `name=${encodeURIComponent(name)}; Expires= ${expires.toGMTString()}; HttpOnly; Path=/`, 
            // 헤더 한글설정 불가능 -> 인코딩은 encodeURIComponent 메서드, 한글은 encodeURIComponent로 감싸넣는다
            // 제한된 ASCII 코드만 들어가야 함 -> 줄바꿈 금지
            // 쿠키 설정 시 만료시간Expires, HttpOnly, Path 등의 옵션 부여 = 옵션 사이에는 세미콜론으로 구분
            /*
                쿠키명=쿠키값 : 기본적 쿠키 값
                Expires=날짜 : 만료 기한. 기한이 지날 시 쿠키 제거, 기본값 : 클라이언트 종료 시
                Max-age=초 : Expires와 비슷하지만 날짜 대신 초 입력, Expires보다 우선순위 높음
                Domain=도메인명 : 쿠키가 전송될 도메인 특정, 기본값 : 현재 도메인
                Path=URL : 쿠키가 전송될 URL 특정, 기본값 '/' => 모든 URL에서 쿠키 전송 가능
                Secure : HTTPS일 때만 쿠키 전송
                HttpOnly : 설정시 JS에서 쿠키에 접근 불가능, 쿠키 조작 방지를 위해 설정 추천
            */
        });
        res.end();

//3 : 그 외 경우 - 쿠키가 있는지 확인
        // name이라는 쿠키가 있을 경우 : 로그인한 상태로 간주, 인사말 전송
    }else if(cookies.name){
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end(`${cookies.name}님 안녕하세요`);
    }else{ // 처음 방문 시 쿠키가 없으므로 cookie2.html (로그인할 수 있는 페이지) 전송
        try{
            const data = await fs.readFile('./cookie2.html');
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            res.end();
        }catch(err){
            res.writeHead(500, {'Content-Type': 'text/plain; charset=utf-8'});
            res.end(err.message);
        }
    }

// 
})
    .listen(8084, ()=>{
        console.log('8084번 포트에서 서버 대기 중입니다!');
    });