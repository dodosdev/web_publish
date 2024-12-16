import React, { useState, useRef } from 'react';
import { validationFormCheck } from '../../apis/validate';
import './commons.css';
import './cgv.css';


export default function CgvLoginForm() {
    // const idRef = useRef(null);
    // const pwdRef = useRef(null);

    const refs = {
        idRef:useRef(null),  //refs.idRef
        pwdRef: useRef(null)
    };

    const initFormData = {'id': '', 'pwd': ''};
    const [formData, setFormData] = useState(initFormData); 
     //아이디 패스워드 입력폼에 빈값일경우 에러메세지
    const [errors, setErrors] = useState({'id':'', 'pwd':''}); 


    const handleChangForm = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]:value});
        if(name === 'id') {
            (value === '') ?
            setErrors({...errors, ['id']:'아이디를 입력해주세요'})
            : setErrors({...errors, ['id']: ''});
        } else if(name === 'pwd') {
            (value === '') ?
            setErrors({...errors, ['pwd']:'패스워드를 입력해주세요'})
            : setErrors({...errors, ['pwd']: ''});
        };

        
    }



    const handleSubmit = (event) => {
        event.preventDefault();
        const param = {
            // 'idRef':idRef,
            // 'pwdRef':pwdRef,
            'refs': refs,
            'errors': errors,
            'setErrors':setErrors
        };
        if(validationFormCheck(param))
            console.log(formData);
        
    }

    return (

        <div className="center-layout login-form ">
            <h1 className="center-title">로그인</h1>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <p>아이디 비밀번호를 입력하신 후, 로그인 버튼을 클릭해 주세요</p>
                    </li>
                    <li>
                        <div className="login-form-input">
                            <i className="fa-regular fa-user"></i>
                            <input type="text" 
                                    name="id" 
                                    id="id" 
                                    ref={refs.idRef}
                                    // oninput="handleChange(event)"
                                    onChange={handleChangForm}
                                    placeholder="아이디를 입력해주세요" 
                                    />
                        </div>
                        <p id="error-msg-id" style={{'color':'red'}}>{errors.id}</p>
                    </li>
                    <li>       
                        <div className="login-form-input">
                            <i className="fa-solid fa-lock"></i>             
                            <input type="password" 
                            name="pwd"  
                            id="pwd" 
                            ref={refs.pwdRef}
                            onChange={handleChangForm}
                            placeholder="비밀번호를 입력해주세요" />                        
                        </div>
                        <p id="error-msg-pwd" style={{'color':'red'}}>{errors.pwd}</p>
                    </li>
                    <li>
                        
                        <button type="submit" className="btn-main-color" >로그인</button>
                    </li>

                    <li>
                        <div>
                            <input type="checkbox" name="status" />
                            <label for="">아이디 저장</label>
                        </div>
                        <div>
                            <a href=""> 아이디 찾기 </a>
                            <span>&gt;</span>
                            <a href=""> 비밀번호 찾기</a>
                            <span>&gt;</span>
                        </div>
                    </li>

                </ul>
                <div>
                    <img src="https://adimg.cgv.co.kr//images/202206/loginplus/350x300.png" alt="" />
                </div>
            </form>
        </div> 
    );
}

