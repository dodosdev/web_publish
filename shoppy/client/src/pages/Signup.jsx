import React, { useState, useRef } from 'react';
import '../styles/signup.css';
import { validateSignup } from '../utils/funcValidate.js';
import { initSignup, useInitSignupRefs } from '../utils/funcInitialize.js';

export default function Signup() {

    const { names, placeholders, lables, initFormData} = initSignup();
    const {refs, msgRefs} = useInitSignupRefs(names);
    const [formData, setFormData] = useState(initFormData);

//     const names = ['id', 'pwd', 'cpwd', 'name', 'phone', 'emailname'];
//     const namesKor = ['아이디', '비밀번호', '비밀번호 확인', '이름', '휴대폰 번호', '이메일 주소'];
//     const placeholdersKor = ['아이디(6~12자이내)', '비밀번호', '비밀번호 확인', '이름', '휴대폰 번호', '이메일 주소'];



//     /** 배열.reduce(콜백함수, 리턴데이터 타입정의 */ 
//     const placeholders =  names.reduce((acc, name, idx) => {   //(누적값, 현재값, idx ->id )
//         acc[name] = placeholdersKor[idx];   return acc;  
//     }, {}); 


//     const lables = names.reduce((acc, name, idx) => { 
//         acc[name] = namesKor[idx];  return acc;  //{id: "아이디", pwd:"아이디"..}  
//         //idx--> names = ['id'...] 배열의 'id' 0번째값 -->아이디  
//     }, {});
//     // console.log('lables -->>', lables);

// //  누산기 (acc)
// //  현재 값 (cur)
// //  현재 인덱스 (idx)
// //  원본 배열 (src)


    
//     const initFormData =  names.reduce((acc, name) => {  
//         //실행코드 ///acc에 데이터가쌓이므로 acc를 return함 
//         acc[name] = "";   return acc; 
//         // {"id":""...}오브젝트타입 // [emailname]가 끝날때까지계속돌아감
//     }, {});  // }, {반환되는 타입});
//     //https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce


//     const refs = useRef(
//         names.reduce((acc, name)=>{
//             acc[name.concat('Ref')] = React.createRef(); //useRef(null) Hook 바로호출 X
//             return acc;
//         }, {})
//     );
//     refs.current.emaildomainRef = React.createRef();

    



//     const msgRefs = useRef(
//         names.reduce((acc, name)=>{  //(acc 누적되있는함수, name배열)
//             acc[name.concat('MsgRef')] = React.createRef();
//             return acc; //
//         }, {})
//     );







    //change
    const handleChangeForm = (e) => {
        const { name, value } = e.target;
        // setFormData({...formData, [name]:value});   

        setFormData({...formData, [name]:value});
    }



    //submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if(validateSignup(refs, msgRefs)){  //(validateSignup()괄호가 없으면 결과값이 안나옴//(refs, msgRefs) msgRefs메세지 위치정보
            console.log('submit --->> ', formData);  //http://localhost:3000/signup (주소확인)리액트에서 관리
        }   
    }



    // console.log('init reduce -->>', initFormData );
    // console.log('refs reduce -->>', refs );
    // console.log('msgRefs reduce -->>', msgRefs );
    

    // const msgRefs = {
    //     'msgIdRef': useRef(null),
    //     'msgPwdRef': useRef(null),
    //     'msgCpwdRef': useRef(null),
    //     'msgNameRef': useRef(null),
    //     'msgPhoneRef': useRef(null),
    //     'msgEmailnameRef': useRef(null),
    //     // 'msgEmailDomainRef': useRef(null),
    // }



    // const refs = {
    //     'idRef': useRef(null),
    //     'pwdRef': useRef(null),
    //     'cpwdRef': useRef(null),
    //     'nameRef': useRef(null),
    //     'phoneRef': useRef(null),
    //     'emailnameRef': useRef(null),
    //     'emailDomainRef': useRef(null),
    // }


    // const initFormData = {
    //     'id':'',
    //     'pwd':'',
    //     'cpwd':'',
    //     'name':'',
    //     'phone':'',
    //     'email':'',
    //     'emaildomain':'',
    // }








{/* <ul>
    삼항연산자
    { (조건) ? (true) : (false)
        names && names.map((name) => { //콜백함수는
            (name === 'emailname') ? (이메일주소의구조) : (!이메일주소)
                                이메일일경우나오는코드 : 이메일이 아닐경우 코드
        })
    }

    <li>
    </li>
</ul> */}


// 
    return (
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
                                            placeholder = {placeholders[name]} />
                                            { name === "id" &&
                                                <>
                                                    <button type="button" >중복확인</button>
                                                    <input type="hidden" id="idCheckResult" value="default" />
                                                </>
                                                
                                            }                             
                                        </> 
                                    )}
                                </div>
                            </li>
                        ))
                    }






                    
                    

                    {/* <li>
                        <label for="" ><b>아이디</b></label>
                        <span ref={msgRefs.msgIdRef}>아이디를 입력해주세요</span>
                        <div>
                            <input type="text" 
                                    name="id"
                                    id="id"
                                    ref={refs.idRef}
                                    onChange={handleChangeForm}
                                    placeholder = "아이디 입력(6~20자)" />
                            <button type="button" >중복확인</button>
                            <input type="hidden" id="idCheckResult" value="default" />
                        </div>
                    </li>
                    <li>
                        <label for=""><b>비밀번호</b></label>
                        <span ref={msgRefs.msgPwdRef} >12자 이내의 비밀번호를 입력해주세요</span>
                        <div>
                            <input type="password" 
                                    name="pwd"
                                    id="pwd"
                                    ref={refs.pwdRef}
                                    onChange={handleChangeForm}
                                    placeholder="비밀번호 입력(문자,숫자,특수문자 포함 6~12자)" />
                        </div>
                    </li>
                    <li>
                        <label for=""><b>비밀번호 확인</b></label>
                        <span ref={msgRefs.msgCpwdRef}>비밀번호 확인을 입력해주세요</span>
                        <div>
                            <input type="password" 
                                    name="cpwd"
                                    id="cpwd"
                                    ref={refs.cpwdRef}
                                    onChange={handleChangeForm}
                                    placeholder="비밀번호 재입력" />
                        </div>
                    </li>
                    <li>
                        <label for=""><b>이름</b></label>
                        <span ref={msgRefs.msgNameRef}>이름을 입력해주세요</span>
                        <div>
                            <input type="text" 
                                    name="name"
                                    id="name"
                                    ref={refs.nameRef}
                                    onChange={handleChangeForm}
                                    placeholder="이름을 입력해주세요" />
                        </div>
                    </li>
                    <li>
                        <label for=""><b>휴대폰번호</b></label>
                        <span ref={msgRefs.msgPhoneRef}>휴대폰번호를 입력해주세요('-' 포함)</span>
                        <div>
                            <input type="text" 
                                    name="phone"
                                    id="phone"
                                    ref={refs.phoneRef}
                                    onChange={handleChangeForm}
                                    placeholder="휴대폰 번호 입력('-' 포함)" />
                        </div>
                    </li>
                    <li>
                        <label for=""><b>이메일 주소</b></label>
                        <span ref={msgRefs.msgEmailnameRef}>이메일 주소를 입력해주세요</span>
                        <div>
                            <input type="text" 
                                    name="emailname"
                                    id = "emailname"
                                    ref={refs.emailnameRef}
                                    placeholder="이메일 주소" />
                            <span>@</span>       
                            <select name="emaildomain" 
                                    id="emaildomain"  ref={refs.emailDomainRef} onChange={handleChangeForm} >
                                <option value="default">선택</option>
                                <option value="naver.com">naver.com</option>
                                <option value="gmail.com">gmail.com</option>
                                <option value="daum.net">daum.net</option>
                            </select>
                        </div>
                    </li> */}
                    <li>
                        <button type="submit">가입하기</button>
                        <button type="reset">가입취소</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}







/**
 * 문자열에서 인덱스는 0부터 시작합니다.
 * 첫 번째 문자열의 인덱스는 0이고, 두 번째 문자열의 인덱스는 1입니다.

문자열 greeting에서 문자열 "환영합니다."를 찾아
첫 번째로 검색된(등장한) 문자열("환")의 인덱스를 반환합니다.
const hello = greeting.indexOf("환영합니다.");
console.log(hello); // 출력: 0;

문자열 greeting에서 인수로 전달된 문자열 "반갑습니다."를 찾을 수 없으므로
-1을 반환합니다.
const niceTomeetYou = greeting.indexOf("반갑습니다.");
console.log(niceTomeetYou); // 출력: -1;

const coding = greeting.indexOf("코딩", 5);
두 번째 인수는 검색을 시작할 인덱스입니다.
이 인수는 옵션으로, 생략하면 처음(0)부터 검색합니다.
인덱스는 여전히 맨 왼쪽부터 오른쪽으로 카운트됩니다.
인수의 값이 5이므로, 6번째부터 검색했을 때 문자 "코딩"은 검색이 되고,
맨 왼쪽(인덱스 0)부터 검색된 문자열 "코"의 인덱스는 7입니다.
console.log(coding); // 출력: 7;
 */