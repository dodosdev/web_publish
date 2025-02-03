import express from 'express';
import mainRouter from './router/mainRouter.js';
import helloRouter from './router/helloRouter.js';
import employeeRouter from './router/employeeRouter.js';
import cors from 'cors';

// 서버 생성 및 포트 정의
const server = express();
const port = 9000;


/** 서버의 공통적인 작업 */
server.use(express.json());
server.use(express.urlencoded());
server.use(cors());


/** 서버의 요청처리를 위한 미들웨어 정의 */
// http://localhost:9000/
/**  / => Hello~ NodeJS */

server.use('/', mainRouter);
server.use('/hello', helloRouter);
server.use('/employee', employeeRouter); //






//server.get('/요청경로', 콜백함수)
// server.get('/', (req, res)=> {
//     res.send('Hello2~ NodeJS');
//     res.end();
//     //res.send('Hello~ NodeJS'); //send() 함수는 한번만 전송 가능!
// });


// /**  /Hello => Welcome to Hello~~ */
// server.get('/hello', (req, res)=>{   //요청이 어떤형태로 올지모를때 use

//     //요청
//     //디비연동
//     //결과 비교
//     //결과생성

//     res.send('Welcome to Hello~~');
//     res.end();
// });




server.listen(port, ()=> {
    console.log(`server port ===>> ${port}`);
});

//repository 폴더는 디비연동에 사용됨