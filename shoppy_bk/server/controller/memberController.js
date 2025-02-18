import * as repository from '../repository/memberRepository.js';
import jwt from 'jsonwebtoken';



/**
 * 로그인 체크 : checkLogin
 */
export const checkLogin = async(req, res) => {
    // console.log('login data --->>', req.body);
    let result = await repository.checkLogin(req.body);  // result_rows=1

    if(result.result_rows === 1){
        //jwt 토큰 생성 및 result 객체에 추가 : {result_row:1, token: ~~~}
        const token = jwt.sign({"userId": req.body.id}, '9DDhiD7XSP');  //토큰 생성
        result = {...result, "token" :token};
        
    }
    res.json(result);
    res.end();
}



/**
 * 아이디 중복체크 : getIdCheck
 */
export const getIdCheck = async(req, res) => {
    const result = await repository.getIdCheck(req.body);
    res.json(result);
    res.end();
}


/**
 * 회원가입 : registerMember
 */
export const registerMember = async(req, res) => {
    const formData = req.body;
    const result = await repository.registerMember(formData);
    res.json(result);
    res.end();
}




