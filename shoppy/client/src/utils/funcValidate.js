/********************************************
 *            title : 로그인폼
 *********************************************/

    /** validate */
    export const validateLogin = ({idRef, pwdRef}) => {  //구조분해할당
        let result = true;

        if(idRef.current.value === '') {  //현재상태의 빈값을입력
            alert('아이디를 입력해주세요');
            idRef.current.focus();
            result = false;
        } else if (pwdRef.current.value === '') {
            alert('패스워드를 입력해주세요');
            pwdRef.current.focus();    
            result = false;
        }
        return result;  //return으로 결과값나옴
    }




/********************************************
 *            title : Signup
 *********************************************/

    //validate
    export const validateSignup = (refs) => {  
    //(refs)수정범위가 넓을경우 구조분해할당으로하면작업이번거로움
        let result = true;
        if(refs.idRef.current.value === '') {
            alert("아이디를 입력해주세요");
            refs.idRef.current.focus();
            result = false;
        } else if (refs.pwdRef.current.value === '') {
            alert("패스워드 입력해주세요");
            refs.pwdRef.current.focus()
            result = false;
        }
        return result;
    }
