const express = require('express'); // 웹 서버 모듈 (http 모듈 포함)
const path = require('path') // 파일 경로 지정 모듈

const app = express(); // express 모듈을 app 변수에 할당 : express 내부에 http 모듈 내장 => 서버 역할 가능
app.set('port', process.env.PORT || 3000); // app.set('port', 포트) => 서버 실행 포트 설정 : process.env 객체에 PORT 속성이 존재할 시 그 값 사용 / default 3000
// 추후 데이터를 app.get(key)로 가져올 수 있음

app.get('/', (req, res)=>{ // app.get(주소, 라우터) : 주소에 대한 GET 요청 시 취할 동작
    // 매개변수 req : 요청관련 정보 포함 객체, res : 응답 관련 정보 포함 객체
    // 익스프레스에서는 res.write / res.end 대신 res.send 사용
    // res.send('Hello, Express');
    res.sendFile(path.join(__dirname, '/Front.html'));
});
// GET 이외에도 POST PUT PATCH DELETE OPTIONS에 대한 라우터를 위한 app.post/put/patch/delete/options 메소드 존재

app.listen(app.get('port'), ()=>{ // app.listen : http 웹 서버와 동일 ( 포트는 app.get('port')로 획득)
    console.log(app.get('port'), '빈 포트에서 대기 중');
});

// 단순 문자열 대신 HTML로 응답 => res.sendFile 메소드 이용 (파일경로는 path모듈 사용해 지정)