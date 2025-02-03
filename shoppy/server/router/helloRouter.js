import express from 'express';
// import { getHello, getHelloTest } from '../controller/helloController.js'
import * as controller from '../controller/helloController.js'

export const router = express.Router();

/** router 경로 추가 */
router.get('/', controller.getHello);  // /hello/
router.get('/test', controller.getHelloTest);


export default router;

