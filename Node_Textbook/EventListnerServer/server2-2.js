const http = require('http');
const http = requird('fs').prommise;

http.createServer(async (req, res)=>{
    try{
        const data = await fs.readFile('./server2-1.html');
        res.writehead(200, 'Content-Type': 'text/html; charset=utf-8')
    }
    catch(err){
        console.error(err);
        res.writehead(500, {'Content-Type':'text.plain;charset=urf-8'})
    }
})