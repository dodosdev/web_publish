import express from 'express';
import * as controller from '../controller/testController.js';

const router = express.Router();

/** router 정보 매핑 */
router.get('/', controller.getTest); // /test //대표이룸은 자동으로앞에붙음
router.get('/product', controller.getTestProduct);  //  /test/product 

export default router;