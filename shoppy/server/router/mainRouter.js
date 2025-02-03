import express from 'express';
// import { getMain } from '../controller/mainController.js';
import * as controller from '../controller/mainController.js';

const router = express.Router();

// router.get('/', 컨트롤러 함수명);
router.get('/', controller.getMain); // 루트를 받음 /


export default router;