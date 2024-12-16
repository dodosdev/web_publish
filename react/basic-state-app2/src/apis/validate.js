
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
            result = false;
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