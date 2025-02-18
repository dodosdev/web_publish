import express from 'express';
import * as controller from '../controller/helloController.js';

const router = express.Router();

// router.get('/hello', getHello);
// // router.get('라우팅 경로', 연동하는 컨트롤러 이름);
// router.get('/hello/:id', getHelloParam);

router
    .get('/hello', controller.getHello)
    .get('/hello/:id', controller.getHelloParam);

export default router;