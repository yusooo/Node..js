const http = requrie('http');

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-type':'text/html; charset=utf-8'}); // 응답에 대한 정보 기록 메소드
    // 첫 번째 인수 : HTTP 메세지 200 = 성공적 요청, 두 번째 인수 : 응답에 대한 정보 콘텐츠의 형식 HTML, 한글 표시를 위해 charset을 utf-8로 설정 (헤더)
    res.write('<h1>Hello Node!</h1>'); // 첫 번째 인수 : 클라이언트로 보낼 데이터(본문에 기록됨)
    res.end('<p>Hello Server</p>'); // 응답 종료 메소드, 인수가 있다면 클라이언트로 보내고 종료
});
// 포트 : 서버 내 프로세스 구분 번호
// 서버는 http 요청 대기 외에도 DB와의 통신, FTP 요청 등 다양한 작업을 함 -> 프로세스에 따라 포트를 다르게 할당해 요청 구분
// FTP = 21번, HTTP = 80번, HTTPS=443번, MySQL=3306번 등
// IP 주소 뒤에 :과 붙여 사용 (http에서 80번 포트 혹은 https에서 443번 포트의 경우 주소에서 포트 생략 가능)
// 다른 서비스가 사용중인 포트를 사용시 Error:listen EADDRINUSE :::(포트번호) 등의 에러 발생
server.listen(8080); // 서버 연결
// 8080 : 클라이언트에 공개할 포트 번호, ()=>{} : 포트 연결 완료 후 실행 예정인 콜백함수
// listen 메소드에 콜백 함수를 넣는 대신 listening 이벤트 리스너 추가 가능
server.on('listening', ()=>{
    console.log('8080번 포트에서 서버가 대기 중입니다!');
});
server.on('error', (error)=>{
    console.log(error);
});