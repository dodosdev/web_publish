import React, { useRef } from "react";

/********************************************
 *          Signup 컴포넌트 초기화 작업
 *********************************************/
export function initSignup() {  //init 초기화
    const names = ['id', 'pwd', 'cpwd', 'name', 'phone', 'emailname'];     
        const namesKor = ['아이디', '비밀번호', '비밀번호 확인', '이름', '휴대폰 번호', '이메일 주소'];
        const placeholdersKor = ['아이디(6~12자이내)', '비밀번호', '비밀번호 확인', '이름', '휴대폰 번호', '이메일 주소'];
    
    
    
        /** 배열.reduce(콜백함수, 리턴데이터 타입정의 */ 
        const placeholders =  names.reduce((acc, name, idx) => {   //(누적값, 현재값, idx ->id )
            acc[name] = placeholdersKor[idx];   return acc;  
        }, {}); 
    
    
        const lables = names.reduce((acc, name, idx) => { 
            acc[name] = namesKor[idx];  return acc;  
        }, {});

    
        
        const initFormData =  names.reduce((acc, name) => {  
            //실행코드 ///acc에 데이터가쌓이므로 acc를 return함 
            acc[name] = "";   return acc; 
        }, {});  
    
        // const refs = useRef(
        //     names.reduce((acc, name)=>{
        //         acc[name.concat('Ref')] = React.createRef(); //useRef(null) Hook 바로호출 X
        //         return acc;
        //     }, {})
        // );
        // refs.current.emaildomainRef = React.createRef();
    
        
    
    
    
        // const msgRefs = useRef(
        //     names.reduce((acc, name)=>{  //(acc 누적되있는함수, name배열)
        //         acc[name.concat('MsgRef')] = React.createRef();
        //         return acc; //
        //     }, {})
        // );
    
        return {names, placeholders, lables, initFormData}; //{}여러개는 객체로..
}


/**
 * 
 * @returns 
 */

export function useInitSignupRefs(names) {    //커스토머 Hook
    //react Hook을 사용하려면 앞에 소문자use를 붙여야함
    const refs = useRef(
        names.reduce((acc, name)=>{
            acc[name.concat('Ref')] = React.createRef(); //useRef(null) Hook 바로호출 X
            return acc;
        }, {})
    );
    refs.current.emaildomainRef = React.createRef();

    

    const msgRefs = useRef(
        names.reduce((acc, name)=>{  //(acc 누적되있는함수, name배열)
            acc[name.concat('MsgRef')] = React.createRef();
            return acc; //
        }, {}) 
    );
    return {refs, msgRefs};
}


// export const initSignup = () => {

// }

//react Hook 함수는 --> (useRef)use가붙음