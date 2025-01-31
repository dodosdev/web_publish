
// const express = require('express');  :: NodeJS에서 모듈 가져오기
// package.json 파일에   "type": "module", 수정하면 import 형식 사용 가능
import express from 'express'; 
import helloRouter from './router/helloRouter.js';  //helloRouter에있는 router를가져옴
import productRouter from './router/productRouter.js';


const server = express();   //익스프레스 서버 생성
const port = 9000;

//app이라는 함수 생성  const app = express()  

/** 익스프레스 서버의 요청/응답 처리하는 미들웨어
 *  요청/응답 메소드 : GET, POST, PUT, DELETE, USE(어떤방식으로받는지모를때)  
 * //http://localhost:9000/hello(GET방식)
 *  MVC 패턴을 적용하여 작업을 분리시킴
 * --> 역할에 맞추어 작업을 분리하는 용도
 * --> M(Model), V(View), C(Controller)
 * --> M(Repository), V(Router), C(Controller)
 * 
 * 
 *  https://developer.mozilla.org/ko/docs/Glossary/MVC
 *  view(리액트 (Router)), Model(DB(레파지토리  -DB에서 테이블을 가져옴)),
 *  Controller(view, Model를 컨트롤함)
 *  server.js 역할분리
 */





server.use('/hello', helloRouter);  //hello 시작하는 주소는 helloRouter로 매핑
//use를 사용해서 대표경로로 사용한다

// server.get('/hello', helloRouter);
// server.get('/hello/:id', helloRouter);

server.use('/product', productRouter);
// server.get('/product/:pname', productRouter);


// server.get('/hello', (req, res)=>{
//     console.log('Hello~!! Nodejs~!!');
//     res.send('<h1>반갑습니다~클라이언트~</h1>'); 
//     //res.send 값을보냄
// });



server.listen(port, ()=>{
    console.log(`서버 대기중---->> ${port}`); //템플릿리터럴
    
});  //익스프레스 서버 대기상태 : 포트 설정 및 메시지출력 
//server.listen(9000, function{}); 콜백은 이름없이 한번만 사용




// // /test ---> Hello~ test!!
// server.get('/test', (req, res)=>{
//     res.send('Hello~test');
    
// });


// // test/hong --> Hello~hong!
// server.get('/test/:name', (req, res)=> {  //req객체를통해  
//     //'/test/:변수명' const name ='park';
//     // req가 경로 관리
//     res.send(`Hello~ ${req.params.name}!!`); //템플릿리터럴로 변경
// });



