import React, { useState, useRef } from 'react';
import { validateFormSignup2 } from '../../apis/validate.js';
import { initFormNames } from '../../apis/initial.js';

export default function Signup2() {
    //배열 + reduce() 함수

    const initArray = [
        'id', 'pass', 'name', 'phone1', 'phone2','phone3', 'address', 'birth1', 'birth2', 'birth3', 'job', 'gender', 'email', 'intro' 
        //formData가 관리
    ];

    // const refArray = ['idRef','passRef','nameRef','phone1Ref'];

    // const init = initArray.reduce((acc, key)=>{
    //     acc[key] = '';
    //     return acc;
    // }, {});
    //


    const refs = {
        idRef:useRef(null),  //useRef로 객체의 주소값을가져옴
        passRef:useRef(null),
        nameRef:useRef(null),
        phone1Ref:useRef(null),
        phone2Ref:useRef(null),
        phone3Ref:useRef(null),
        addressRef:useRef(null),
        birth1Ref:useRef(null),
        birth2Ref:useRef(null),
        birth3Ref:useRef(null),
        jobRef:useRef(null),
        genderRef:useRef(null),
        emailRef:useRef(null),
        introRef:useRef(null),
    }



    const [formData, setFormData] = useState(initFormNames(initArray));
    const handleChangeForm = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    }


    // acc = { 'idRef':useRef(null)};

    const handleSubmit = (event) => {
        event.preventDefault();
        if(validateFormSignup2(refs))console.log(formData);  //formData가 init을가리킴
    }
    

    //handleSubmit 백엔드로보내줌
    return (
        <div>
            <h1>회원가입</h1>
            <form onSubmit={handleSubmit}> 
                <div>
                    <label htmlFor="">아이디</label>
                    <input type="text" 
                            name="id"
                            value={formData.id}
                            ref={refs.idRef}
                            onChange={handleChangeForm} />
                </div>
                <div>
                    <label htmlFor="">비밀번호</label>
                    <input type="password" 
                            name="pass"
                            value={formData.pass}
                            ref={refs.passRef} //유효성체크를위해 Ref사용 
                            onChange={handleChangeForm} />
                </div>
                <div>
                    <label htmlFor="">이름</label>
                    <input type="text" 
                            name="name"
                            value={formData.name}
                            ref={refs.nameRef} 
                            onChange={handleChangeForm} />
                </div>
                <div>
                    <label htmlFor="">전화</label>
                    <input type="text" 
                            name="phone1"
                            value={formData.phone1}
                            ref={refs.phone1Ref} 
                            onChange={handleChangeForm} />
                    <input type="text" 
                            name="phone2"
                            value={formData.phone2}
                            ref={refs.phone2Ref} 
                            onChange={handleChangeForm} />
                    <input type="text" 
                            name="phone3"
                            value={formData.phone3}
                            ref={refs.phone3Ref} 
                            onChange={handleChangeForm} />
                </div>
                <div>
                    <label htmlFor="">주소</label>
                    <input type="text" 
                            name="address"
                            value={formData.address}
                            ref={refs.addressRef} 
                            onChange={handleChangeForm} />
                </div>
                <div>
                    <label>생일</label>
                    <input type="text" 
                            name="birth1"
                            value={formData.birth1}
                            ref={refs.birth1Ref} 
                            onChange={handleChangeForm} />/
                    <input type="text" 
                            name="birth2"
                            value={formData.birth2}
                            ref={refs.birth2Ref} 
                            onChange={handleChangeForm} />/
                    <input type="text" 
                            name="birth3"
                            value={formData.birth3}
                            ref={refs.birth3Ref} 
                            onChange={handleChangeForm} />
                </div>
                <div>
                    <label htmlFor="">직업</label>
                    <select name="job"
                            value={formData.job} 
                            ref={refs.jobRef} 
                            onChange={handleChangeForm}>
                        <option value="default">선택</option>
                        <option value="frontend">프론트엔드</option>
                        <option value="default">선택</option>
                        <option value="default">선택</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="">성별</label>
                    <input type="radio"  
                            name="gender" 
                            value={formData.gender}
                            ref={refs.genderRef}
                            onChange={handleChangeForm} />남
                    <input type="radio"  
                            name="gender" 
                            value={formData.gender}
                            ref={refs.genderRef}
                            onChange={handleChangeForm} />여
                </div>
                <div>
                    <label>이메일</label>
                    <input type="text"
                            name="email"
                            value={formData.email}
                            ref={refs.emailRef} 
                            onChange={handleChangeForm}/>
                </div>
                <div>
                    <label>자기소개</label>
                    <textarea type="text" 
                                name="intro" 
                                cols="50" 
                                rows="5" 
                                placeholder="자기소개"   
                                value={formData.intro}
                                ref={refs.introRef} 
                                onChange={handleChangeForm} > 
                    </textarea>
                </div>
                <div>
                    <button type="submit">회원가입</button>
                    <button type="button">취소</button>
                </div>
                
            </form>
        </div>
    );
}

