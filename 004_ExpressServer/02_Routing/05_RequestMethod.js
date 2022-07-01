// 응답 메소드

/*
    클라이언트에서 요청이 올 경우 라우트에서 메소드 중 한 방법으로 응답 전송
    => 요청request-응답response 주기 종료 가능

    핸들러 함수에서 메소드 중 하나라도 호출되지 않은 경우
    => 클라이언트 요청에 응답없이 정지
*/

// res.download() : 파일을 다운로드하도록 프롬프트
// res.end() : 응답 프로세스를 종료
// res.json() : JSON 응답을 전송
// res.jsonp() : JSONP 지원을 통해 JSON 응답을 전송
// res.redirect() : 요청의 경로를 재지정
// res.render() : 뷰View 템플릿을 렌더링
// res.send() : 다양한 유형의 응답을 전송
// res.sendFile() : 파일을 octet 스트림으로 전송
// res.sendStatus() : 응급 상태 코드 설정후 해당 코드를 응답 본문body에 담아서 전송
