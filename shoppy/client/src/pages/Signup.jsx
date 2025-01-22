import React, { useState, useRef } from 'react';
import '../styles/signup.css';
import { validateSignup, 
            handleDuplicateIdCheck, 
            handlePasswordCheck } from '../utils/funcValidate.js';
import { initSignup, useInitSignupRefs } from '../utils/funcInitialize.js';

export default function Signup() {

    const { names, placeholders, lables, initFormData, id} = initSignup();
    const {refs, msgRefs} = useInitSignupRefs(names);
    const [formData, setFormData] = useState(initFormData);
    const [idCheckResult, setIdCheckResult] = useState('default');



    //change
    const handleChangeForm = (e) => {
        const { name, value } = e.target;
        // setFormData({...formData, [name]:value});   
        setFormData({...formData, [name]:value});
    }



    //submit
    const handleSubmit = (e) => {
        e.preventDefault();

        if(validateSignup(refs, msgRefs)){ 
            if(idCheckResult === "default") { 
                alert("중복 확인을 진행해 주세요");
            
            } else {
                console.log('submit --->>', formData);   
            }     
        //(validateSignup()괄호가 없으면 결과값이 안나옴//(refs, msgRefs) msgRefs메세지 위치정보
        }      
    }






    //중복확인  //funcValidate.js 로 옮김
    // const handleDuplicateIdCheck = () => {
    //     if(refs.current["idRef"].current.value === '') {
    //         msgRefs.current["idMsgRef"].current.style.setProperty('color','red');
    //         refs.current["idRef"].current.focus();
    //         return false;
    //     }else{
    //         const did = "test"; 
    //         if(refs.current["idRef"].current.value === did) {
    //             alert("이미 사용중인 아이디 입니다.");
    //             refs.current["idRef"].current.focus();
    //             return false;
    //         }else{
    //             alert("사용이 가능한 아이디 입니다")
    //             refs.current["pwdRef"].current.focus();
    //             return false;
    //         }
    //     }
    // }
            
            // if() {
            // } else if {
            // } else {
            // }
    
// 



    return( 
        <div className="content">
            <h1 className="center-title">SIGINUP</h1>
            <form className="signup-form" onSubmit={handleSubmit}>
                <ul>
                    {
                        names && names.map((name)=>(
                            
                            <li>
                                <label for="" ><b>{lables[name]}</b></label>
                                <span ref={msgRefs.current[name.concat("MsgRef")]}>{lables[name]}를 입력해주세요</span>
                                <div>
                                    { name === 'emailname' ? (
                                        <>
                                            <input type="text" 
                                                    name={name}
                                                    // id = "emailname"
                                                    ref={refs.current[name.concat("Ref")]}  //refs.id
                                                    onChange={handleChangeForm}
                                                    placeholder={placeholders[name]}  />
                                            <span>@</span>       
                                            <select name="emaildomain" 
                                                    // id="emaildomain"  
                                                    ref={refs.current["emaildomainRef"]} 
                                                    onChange={handleChangeForm} >
                                                <option value="default">선택</option>
                                                <option value="naver.com">naver.com</option>
                                                <option value="gmail.com">gmail.com</option>
                                                <option value="daum.net">daum.net</option>
                                            </select>
                                        </>
                                    ) : (
                                        <>  
                                            <input type={(name === "pwd" || name === "cpwd") ? "password" : "text"} 
                                            name={name}
                                            // id="id"
                                            ref={refs.current[name.concat("Ref")]}
                                            onChange={handleChangeForm}
                                            onBlur={(name === 'cpwd') ? ()=>{
                                                handlePasswordCheck(
                                                    refs.current["pwdRef"],
                                                    refs.current["cpwdRef"],
                                                    refs.current["nameRef"],
                                                    msgRefs.current["pwdMsgRef"],
                                                    msgRefs.current["cpwdMsgRef"]
                                                )
                                            } : null}
                                            placeholder = {placeholders[name]} />
                                            { name === "id" &&
                                                <>
                                                    <button type="button" 
                                                        onClick={()=>{handleDuplicateIdCheck(
                                                            refs.current["idRef"],
                                                            refs.current["pwdRef"],
                                                            msgRefs.current["idMsgRef"],
                                                            setIdCheckResult    
                                                        )
                                                        }}
                                                        > 중복확인</button>
                                                    <input type="hidden"
                                                            value={idCheckResult}
                                                            />
                                                </>
                                                
                                            }                             
                                        </> 
                                    )}
                                </div>
                            </li>
                        ))
                    }

                    <li>
                        <button type="submit">가입하기</button>
                        <button type="reset">가입취소</button>
                    </li>
                </ul>
            </form>
        </div>
        );
    }



//("idRef") 객체주소