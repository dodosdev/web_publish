import React, {useRef, useState} from 'react';
import { validateSignup } from '../../apis/validate.js';
import { errorCheckSignup } from '../../apis/errorCheck.js';
import './commons.css';
import './cgv.css';

export default function Signup() {
    const refs = {  
        idRef: useRef(null),  
        pwdRef: useRef(null),
        cpwdRef: useRef(null),
        nameRef: useRef(null),
        phoneRef: useRef(null),
        emailNameRef: useRef(null),
        emailDomainRef: useRef(null),
    }

    //폼데이터 장소
    const init = {
        'id': '',
        'pwd':'',
        'cpwd':'',
        'name':'',
        'phone':'',
        'emailName':'',
        'emailDomain':''
    };

    const initErrors = {
        'id': '',
        'pwd':'',
        'cpwd':'',
        'name':'',
        'phone':'',
        'emailName':'',
        'emailDomain':''
    };


    const [formData, setFormData] = useState(init);
    const [errors, setErrors] = useState(initErrors);


    //폼의 입력이 변경되는 경우 호출되는 함수
    const handleChangeSignup = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]:value});
        errorCheckSignup(name, value, errors, setErrors);
    }


    //폼의 입력이 종료되는 경우 호출되는 함수
    const handleSubmitSignup = (event) => {
        event.preventDefault(); 
        if(validateSignup(refs, errors, setErrors)) console.log(formData);
    }



    return (
        <div class="content">
        <div class="center-layout join-form">
            <h1>회원가입</h1>
            <form onSubmit={handleSubmitSignup}>
                <ul>
                    <li>
                        <label for="아이디" class="join-title-font"><b>아이디</b></label>
                        <span id="error-msg-id">{errors.id}</span>
                        <div>
                            <input type="text"
                            name="id" 
                            value={formData.id}
                            ref={refs.idRef}
                            onChange={handleChangeSignup}
                            id="id"
                            placeholder="아이디 입력(6~20자)" />
                            <button type="button" onclick="idCheck(event)">중복확인</button>
                            <input type="hidden" id="idCheckResult" value="default" />   
                        </div>
                    </li>
                    <li>
                        <label for=""><b>비밀번호</b></label>  
                        <span id="error-msg-pwd">{errors.pwd}</span>
                        <div>
                            <input type="password"
                            name="pwd"
                            id="pwd"
                            value={formData.pwd}
                            ref={refs.pwdRef}
                            onChange={handleChangeSignup}
                            placeholder="비밀번호 입력(6~12자)"
                            minlength="4" maxlength="12" />
                        </div>                      
                    </li>
                    <li>
                        <label for="">비밀번호 확인</label>    
                        <span id="error-msg-cpwd">{errors.cpwd}</span>
                        <div>
                            <input type="password"
                            name="cpwd"
                            id="cpwd"
                            value={formData.cpwd}
                            ref={refs.cpwdRef}
                            onChange={handleChangeSignup}
                            // oninput="handleChangeJoin(event)" 
                            onblur="passwordCheck()"
                            placeholder="비밀번호 재입력"
                            minlength="4" maxlength="12" />
                        </div>                    
                    </li>
                    <li>
                        <label for=""><b>이름</b></label>
                        <span id="error-msg-name">{errors.name}</span>
                        <div>
                            <input type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            ref={refs.nameRef}
                            onChange={handleChangeSignup}
                            // oninput="handleChangeJoin(event)" 
                            placeholder="이름을 입력해주세요" />
                        </div>
                    </li>
                    <li>
                        <label for=""><b>전화번호</b></label>
                        <span id="error-msg-phone">{errors.phone}</span>
                        <div>
                            <input type="text"
                            name="phone" 
                            id="phone"
                            value={formData.phone}
                            ref={refs.phoneRef}
                            onChange={handleChangeSignup}
                            // oninput="handleChangeJoin(event)" 
                            placeholder="전화번호를 입력해주세요" /> 
                        </div>
                    </li>
                    <li>
                        <label for=""><b>이메일 주소</b></label>
                        <span id="error-msg-emailname">{errors.emailName}</span>
                        <div>
                            <input type="text" 
                            name="emailName"
                            id="emailname" 
                            value={formData.emailName}
                            ref={refs.emailNameRef}
                            onChange={handleChangeSignup}
                            // oninput="handleChangeJoin(event)" 
                            placeholder="이메일 주소" />
                            <span>@</span>
                            <select name="emailDomain"
                                    id="emaildomain"
                                    value={formData.emailDomain}
                                    ref={refs.emailDomainRef}
                                    onChange={handleChangeSignup} >
                                <option value="default">선택</option>
                                <option value="naver.com">naver.com</option>
                                <option value="gmail.com">gmail.com</option>
                                <option value="daum.com">daum.com</option>
                            </select> 
                        </div>
                    </li>
                    <li>
                        <button type="submit">가입하기</button>
                        <button type="reset">가입취소</button>
                    </li>
                </ul>
            </form>
            
        </div>
    </div>
    );
}

