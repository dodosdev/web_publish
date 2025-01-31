
// const express = require('express');
import express from 'express';


const server = express();   //익스프레스 서버 생성
const port = 9000;

//app이라는 함수 생성  const app = express()  
/** 익스프레스 서버의 요청/응답 처리하는 미들웨어
 *  요청/응답 메소드 : GET, POST, PUT, DELETE
 *  MVC 패턴을 적용하여 작업을 분리시킴
 *  https://developer.mozilla.org/ko/docs/Glossary/MVC
 *  view(리액트), Model(DB), Controller(view, Model를 컨트롤함
 */

server.get('/hello', (req, res)=>{
    console.log('Hello~!! Nodejs~!!');
    res.send('<h1>반갑습니다~클라이언트~</h1>'); //res.send 값을보냄
    //
});



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



