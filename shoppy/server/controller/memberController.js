import * as repository from '../repository/memberRepository.js';
import jwt from 'jsonwebtoken';

/**
 * 로그인 체크 : checkLogin
 */
export const checkLogin = async(req, res) => {
    // console.log('login data --->>', req.body);
    const result = await repository.checkLogin(req.body);  
    res.json(result);
    res.end();



}




