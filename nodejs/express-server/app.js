// express 웹 서버 :  웹 클라이언트 (브라우저) 받아서 처리 한후 결과를 전송

const express = require('express');
const server = express();  //express() 서버역할

/*
    GET/POST 방식으로 요청들어오는 처리를 나열
 */
// 브라우저가 접속하는 url - http://localhost:8080/
// path : /(root)
server.get('/', (req, res) => { 
    //req: 요청정보(클라이언트 --> 서버), res : 응답정보(서버---> 클라이언트)}); //(req, res) req에 저장됨   
    res.send('<h1>express 서버에서 전송합니다.</h1>'); //html형식으로 작성! 
});   


// 브라우저가 접속하는 url - http://localhost:8080/test
// path : /test
server.get('/test', (req, res) => {
    res.send('<h1>/test로 요청한 결과 전송!!!');
    console.log('/test 전송 완료!!');
    
});


// path : /param/홍길동
server.get('/param/:name', (req, res) => {  //name <--변수에 저장
        //console.log('req', req);
        console.log('name ==>> ', req.params.name);
        res.send(`${req.params.name} 전송 완료!!`); //서버가 결과를줌
}); 




// server.get();
// server.post();
// server.use();




//server.listen(8080);   //(8080) <--port로 항상 열려있음 
server.listen(8080, () => { console.log('서버 실행~')});
