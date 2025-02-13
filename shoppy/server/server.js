import express from 'express';
import cors from 'cors';
import path from 'path';
import memberRouter from './router/memberRouter.js';
import uploadRouter from './router/uploadRouter.js';
import productRouter from './router/productRouter.js';
import cartRouter from './router/cartRouter.js';

// 서버 생성 및 포트 정의
const server = express();
const port = 9000;

/** 서버의 공통적인 작업 */
server.use(express.json());
server.use(express.urlencoded());
server.use(cors());  
//업로드 파일 호출 경로 추가 - 이미지 호출
server.use("/upload_files", express.static(path.join("upload_files"))); 
//저장폴더 연결 //업로드폴더 이름


/** 서버의 요청처리를 위한 미들웨어 정의 */
server.use('/member', memberRouter);
server.use('/uploads', uploadRouter);
server.use('/product', productRouter);
server.use('/cart', cartRouter);



server.listen(port, ()=>{
    console.log(`server port ===>> ${port}`);    
});

