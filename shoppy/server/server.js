import express from 'express';
import testRouter from './router/testRouter.js';

const server =  express(); //app이라는 이름으로 서버 생성
const port = 9000;  //port번호 생성


/** 요청을 처리하는 미들웨어 */
/** /test 요청시 --> Hello~ Test!! 브라우저에 출력 후 종료 */

server.use('/test', testRouter);  //test로 시작하는 모든경로를 routing 한다 (testRouter로 넘긴다)

// server.use('/test', (req, res)=>{   //res리스펀스객체  //controller가하는작업
//     res.send('<h1>Hello~ Test</h1>');
//     res.end();
// }); 


server.listen(port, ()=> {  //listen 요청을 기다림
    console.log(`server start ===>> ${port}`);
}); 



