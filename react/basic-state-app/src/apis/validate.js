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
