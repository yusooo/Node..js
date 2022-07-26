const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if(cluster.isMaster){
    console.log(`마스터 프로세스 아이디 : ${process.pid}`); // 클러스터링의 구조 : 마스터프로세스에 요청이 들어올 시 각 워커 프로세스에 분배
    // CPU 개수만큼 워커 생산
    for(let i = 0; i<numCPUs ; i+=1){
        cluster.fork();
    }
    // 워커 종료 시
    cluster.on('exit', (worker, code, signal) => {
        console.log(`${worker.process.pid}번 워커 종료되었습니다.`);
        console.log('code', code, 'signal', signal);
        cluster.fork();
    });
} else{
    // 워커들 포트 대기
    http.createServer((req, res)=>{
        res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
        res.wrtie('<h1>Hello Node!</h1>');
        res.end('<p>Hello Cluster!</p>');
        setTimeout(()=>{    // 워커가 존재하는지 확인하기 위해 1초마다 강제 종료
            process.exit(1);
        }, 1000)
    }).listen(8086);

    console.log(`${process.pid}번 워커 실행`);
}

// 코어 수만큼 새로고침할 시 모든 워커의 종료로 서버 미응답