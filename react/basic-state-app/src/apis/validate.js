

/**
 * Signup2 폼 유효성체크 - 241217
 * 
 */

export function validateFormSignup2(refs) {  
    /** !!! 배열.map() or 배열.forEach() 함수는 배열객체를 순회하는 것이
     * 목적이므로 if 체크후 focus가 적용되지 않음!!
      */
    const refEntries = Object.entries(refs);
    console.log(refEntries);
    const msgs = {
        'idRef':'아이디',  'passRef':'패스워드',
        'nameRef':'이름',  'phone1Ref':'휴대폰번호',
    };


    for(const item of refEntries) {
        const name = item[0];
        const ref = item[1];
        if(ref && ref.current.value === '') { 
            //current 함수형 컴포넌트에서 useState와 함께 사용될 때, 상태값을 업데이트하는 함수를 정의하는방법중하나
            alert(`${msgs[name]}를 입력해주세요`);
            ref.current.focus();
            return false;
        }
    }
}



    // for(const ref of refValues) {
    //     if(ref.current.value === ''){
    //         alert('아이디');
    //         ref.current.focus();
    //         return false;

    //     }
    // }




    // let checkResult = true;

    // if(refs,idRef.current.value === ''){
    //     alert('아이디 입력');
    //     refs.idRef.current.focus();
    //     result = false;
    // }
    // return result;
//}


// const object1 = {
//     a: 'somestring',
//     b: 42,
//     c: false,
//   };
//   console.log(Object.keys(object1));
  // Expected output: Array ["a", "b", "c"]





// export function validateFormSignup2(refs) {
//     let checkResult = true;

//     if(refs.idRef.current.value === '') {
//         alert('아이디 입력');
//         refs.idRef.current.focus();
//         checkResult = false;
//     }else if (refs.passRef.current.value === ''){
//         alert('비밀번호 입력');
//         refs.passRef.current.focus();
//         checkResult = false;
//     }else if(refs.nameRef.current.value === ''){
//         alert('이름 입력');
//         refs.nameRef.current.focus();
//         checkResult = false;
//     }else if(refs.phone1Ref.current.value === ''){
//         alert('휴대폰 입력');
//         refs.phone1Ref.current.focus();
//         checkResult = false;
//     }else if(refs.phone2Ref.current.value === ''){
//         alert('이름 입력');
//         refs.phone2Ref.current.focus();
//         checkResult = false;
//     }else if(refs.addressRef.current.value === ''){
//         alert('주소 입력');
//         refs.phone2Ref.current.focus();
//         checkResult =false;
//     }else if(refs.birth1Ref.current.value === ''){
//         alert('생일 입력1');
//         refs.phone2Ref.current.focus();
//         checkResult =false;
//     }else if(refs.birth2Ref.current.value === ''){
//         alert('생일 입력2');
//         refs.phone2Ref.current.focus();
//         checkResult =false;
//     }else if(refs.birth3Ref.current.value === ''){
//         alert('생일 입력3');
//         checkResult =false;
//     }else if(refs.jobRef.current.value === ''){
//         alert('직업 입력');
//         checkResult =false;
//     }else if(refs.genderRef.current.value === ''){
//         alert('성별 입력');
//         checkResult =false;
//     }else if(refs.emailRef.current.value === ''){
//         alert('이메일 입력');
//         checkResult =false;
//     }else if(refs.introRef.current.value === ''){
//         alert('자기소개 입력');
//         checkResult =false;
//     }
//     return checkResult;
// }

///////Signup2 폼 유효성체크



/**
 * CgvLoginForm 유효성 체크 함수
 * @returns 
 */    
    
    export const validationFormCheck = (param) => {
        //함수에는 props를사용안함
        let result = true;

        if(param.refs.idRef.current.value === '') {
            // alert("아이디를 입력해주세요");
            param.setErrors({...param.errors, ['id']: '아이디를 입력해주세요'});
            param.refs.idRef.current.focus();
            result = false;
        }else if(param.refs.pwdRef.current.value === '') {
            // alert("패스워드를 입력해주세요");
            param.setErrors({...param.errors, ['pwd']: '패스워드를 입력해주세요'});
            param.refs.pwdRef.current.focus();
            result = false; //입력을 안했을시 focus입력을유도하도록커서가 입력창으로감
        }
        return result;
    }


    /**
     * Login2 컴포넌트 유효성 체크 함수
     */

    export const validateLogin2 = (param) => {
        //함수에는 props를사용안함
        let result = true;

        if(param.idRef.current.value === '') {
            // alert("아이디를 입력해주세요");
            param.setErrorMsg({...param.errorMsg, ['id']: '아이디를 입력해주세요'});
            param.idRef.current.focus();
            result = false;
        }else if(param.refs.pwdRef.current.value === '') {
            // alert("패스워드를 입력해주세요");
            param.setErrorMsg({...param.errorMsg, ['pass']: '패스워드를 입력해주세요'});
            param.pwdRef.current.focus();
            result = false;
        }
        return result;
    }



/**
 *  UserInfo 컴포넌트의 유효성 체크 함수
 */

export const validate = (refs) => {
    let result = true;
                if(refs.nameRef.current.value === '') {
                    alert('이름을 입력해주세요');
                    refs.nameRef.current.focus();
                    result = false;
                }else if (refs.addressRef.current.value === '') {
                    alert('주소를 입력해주세요');
                    refs.addressRef.current.focus();
                    result = false;
                }else if(refs.ageRef.current.value === '') {
                    alert('나이를 입력해주세요');
                    refs.ageRef.current.focus();
                    result = false;
                }
                return result;

}

/**
 * Signup 컴포넌트의 유효성체크 함수
 */
export const validateSignup = (refs, errors, setErrors) => {
    let checkResult = true;
    if(refs.idRef.current.value === '') {
        // alert("아이디 입력");
        setErrors({...errors, ['id']: '아이디를 입력해주세요'}) //id입력이없으면메세지뜸
        // refs.idRef.current.style.setProperty('color','totmato');
        refs.idRef.current.focus();
        checkResult = false;
    }else if(refs.pwdRef.current.value === '') {
        // alert("pwd 입력");
        setErrors({...errors, ['pwd']: '비밀번호를 입력해주세요'}) //initErrors에있는이름맞춰서넣기
        refs.pwdRef.current.focus();
        checkResult = false;
    }else if(refs.cpwdRef.current.value === '') {
        // alert("cpwd 입력");
        setErrors({...errors, ['cpwd']: '비밀번호를 다시 입력해주세요'}) 
        refs.cpwdRef.current.focus();
        checkResult = false;
    }else if(refs.nameRef.current.value === '') {
        // alert("name 입력");
        setErrors({...errors, ['name']: '이름을 입력해주세요'}) 
        refs.nameRef.current.focus();
        checkResult = false;
    }else if(refs.phoneRef.current.value === '') {
        // alert("phone 입력");
        setErrors({...errors, ['phone']: '휴대폰 번호를 입력해주세요'}) 
        refs.phoneRef.current.focus();
        checkResult = false;
    }else if(refs.emailNameRef.current.value === '') {
        // alert("emailName 입력");
        setErrors({...errors, ['emailName']: '이메일을 입력해주세요'}) 
        refs.emailNameRef.current.focus();
        checkResult = false;
    }else if(refs.emailDomainRef.current.value === 'default') {
        // alert("emailDomain 선택");
        setErrors({...errors, ['emailDomain']: '이메일주소를 입력해주세요'}) 
        refs.emailDomainRef.current.focus();
        checkResult = false;
    }

    return checkResult;
    // console.log(refs);
    
}