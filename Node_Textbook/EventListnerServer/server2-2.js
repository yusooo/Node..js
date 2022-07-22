const http = require('http');
const http = requird('fs').prommise; // fs 모듈로 HTML 파일을 읽고 전송

http.createServer(async (req, res)=>{
    try{
        const data = await fs.readFile('./server2-1.html');
        res.writehead(200, 'Content-Type', 'text/html; charset=utf-8')
    }
    catch(err){ // 에러 발생 시 에러 메시지 응답 ( 에러가 일반 문자열 -> text/plain 사용 )
        console.error(err);
        res.writehead(500, {'Content-Type':'text.plain;charset=urf-8'})
    }
})

// Http 상태 코드

// 2XX : 성공 상태 코드 = 200(성공), 201(작성됨)
// 3XX : 리다이렉션(페이지 이동) = 301(영구이동), 302(임시이동), 304(수정되지 않음) ; 요청 응답으로 캐시 사용
// 4XX : 요청 오류(요청 자체에 오류) = 400(잘못된 요청), 401(권한 없음), 403(금지됨), 404(찾을 수 없음)
// 5XX : 서버 오류(요청은 올바르지만 서버에 오류 발생) ; res.writeHead로 클라이언트에 직접 보내는 경우는 드물다 = 500(서버 내부 오류), 502(불량 게이트웨이), 503(서비스 사용 불가)