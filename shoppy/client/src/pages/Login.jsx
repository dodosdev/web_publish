import React, { useState, useRef } from 'react';
import '../styles/login.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { validateLogin } from '../utils/funcValidate.js';

export default function Login() {
    // const idRef = useRef(null);
    // const pwdRef = useRef(null);
    
    const refs = {
        "idRef" : useRef(null), //구조분해할당으로받음
        "pwdRef" : useRef(null)
    }

    const test = [1,2,3]; //[1]

    const [formData, setFormData] = useState({'id':'', 'pwd':''});//오브젝트리터럴로 받음(key, value)


    /** form 데이터 입력 함수 */
    const handleChangeForm = (event) => {  
        console.log(event.target.value);  //input tag --> 이벤트.target.value  //입력이 될때마다 데이터를 받아서 콘솔에 찍힘
         //setFormData에 아이디, 패스워드 저장
        const {name, value} = event.target;  //구조분해 할당으로 name, value만꺼내옴  
        setFormData({...formData, [name] : value}); //property 값이 변수에 저장된 경우 []안에 호출  (프로퍼티:값)
         //({...[name]기존에 있던데이터(값)를 복제해옴(스프레드연산자)
    }
    // console.log('formData--->> ', formData);



    // /** validate */
    // export const validateLogin = ({idRef, pwdRef}) => {  //구조분해할당
    //     let result = true;

    //     if(idRef.current.value === '') {  //현재상태의 빈값을입력
    //         alert('아이디를 입력해주세요');
    //         idRef.current.focus();
    //         result = false;
    //     } else if (pwdRef.current.value === '') {
    //         alert('패스워드를 입력해주세요');
    //         pwdRef.current.focus();    
    //         result = false;
    //     }
    //     return result;  //return으로 결과값나옴
    // }
    


    /** Submit 함수 */
    const handleLoginSubmit = (event) => {
        event.preventDefault();
        if(validateLogin(refs)) {
            console.log('send data -->>', formData);
            // 리액트 ---> 노드서버(express) 데이터 전송
            //브라우저에서 리액트로 옴 리액트에서 관리
        }  
    }


    return (
        <div className="content">
            <h1 className="center-title">LOGIN</h1>
            <form className="login-form" onSubmit={handleLoginSubmit}>
                <ul>
                    <li>
                        <p className="login-form-message">✔ 아이디와 비밀번호를 입력하신 후, 로그인을 진행해주세요.</p>
                    </li>
                    <li>
                        <div className="login-form-input">
                            <span className="login-form-input-icons"><FaUser/></span>
                            <input type="text" 
                                    name="id" //target통해서 이이름으로들어옴
                                    id="id"   //어떤값이 입력됬는지 리액트에알려줌
                                    ref={refs.idRef} //input 정보가idRef에 저장됨
                                    onChange={handleChangeForm}
                                    placeholder="아이디를 입력해주세요" />
                        </div>
                        <p id="error-msg-id"></p>
                    </li>
                    <li>
                        <div className="login-form-input">
                            <span className="login-form-input-icons"><FaLock/></span>
                            <input type="password" 
                                    name="pwd" 
                                    id="pwd"
                                    ref={refs.pwdRef}
                                    onChange={handleChangeForm}
                                    placeholder="패스워드를 입력해주세요" />
                        </div>
                        <p id="error-msg-pwd"></p>
                    </li>
                    <li>
                        <button type="submit" className="login-button">로그인</button>
                    </li>
                    <li>
                        <div  className="login-form-checkbox">
                            <input type="checkbox" name="status" />
                            <label for="">아이디 저장</label>
                        </div>
                        <div>
                            <a href="#">아이디 찾기</a> 
                            <span>&gt;</span>
                            <a href="#">패스워드 찾기</a> 
                            <span>&gt;</span>
                        </div>
                    </li>
                    <li>
                        <button type="button" className="login-button-naver">네이버 로그인</button>
                    </li>
                </ul>
                <div className="loginplus-image">
                    <img src="https://adimg.cgv.co.kr//images/202206/loginplus/350x300.png" alt="" />
                </div>
            </form>
        </div>
    );
}












//매개변수(parameter)란 함수의 정의에서 전달받은 인수를 함수 내부로 전달하기 위해 사용하는 변수를 의미함, 함수에서 정의되어 함수 내부에서 사용되는 변수
//인수(Argument)는 함수를 호출할 때 건네주는 변수
//onChange 이벤트는 입력필드의 값을 변경할때 발생하는 이벤트
//input요소의 onChange 이벤트는 입력필드의 값을 변경할때 발생하는 이벤트 이벤트핸들러 함수를 통해 입력된 값에 대한 처리를 한다.




/**
 * 1. values, handleChage, handleSubmit
    이메일과 비민번호를 입력받는 필드를 추가하고 values 상태를 정의해서 값을 연결했다. 필드가 변경되면 handleChange() 함수가 values를 갱신한다. 폼이 제출을 기다리는 handleSubmit() 함수는 이 값을 출력한다. 간단한 컴포컴넌트라서 머릿 속에 쉽게 UI를 떠올릴 수 있다.
 * 
 * 2.errors, validate -->필드 값을 검사하고 오류 메세지 보여주기 
 * 각 필드의 오류 메세지를 관리하기 위해 errors 상태를 정의했다. 이 값을 필드 아래에 출력하는 리액트 앨리먼트도 추가했다.
폼을 제출하면 handleSubmit() 함수가 동작하는데 입력한 필드값을 검사하기 위해 validate() 함수를 호출한다. 검증에 통과하지 못하면 폼을 제출하지 않는다.
입력한 필드값를 검사한 뒤 기준에 맞지 않으면 오류 메세지를 추가하는 기능이 남았다. 바로 validate() 함수의 역할이다.

    3. 값을 필드에 바인딩할 수 있다. (values, handleChange)
    폼 제출을 처리할 수 있다. (handleSubmit)
    * 
 * 
 */