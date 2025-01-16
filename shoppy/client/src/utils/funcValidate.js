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

    //validate (빈값 체크)
    export const validateSignup = (refs, msgRefs) => {  
        const refEntries = Object.entries(refs); //{idRef: xxxx, ...}
        const msgRefEntries = Object.entries(msgRefs);

        console.log(refEntries);  // [[idRef, xxxx], [[pwRef, xxxx]]]
        console.log(msgRefEntries);

        //refEntries 배열객체와 msgRefEntries 배열객체의 인덱스를 동일하게 체크한다!!
        for(let i=0; i< refEntries.length; i++) {
            const item = refEntries[i];
            const msgItem = msgRefEntries[i]
            const name = item[0];
            const ref = item[1]; // 데이터 입력폼 객체 주소
            const msgName = msgItem[0];
            const msgRef = msgItem[1]; // 데이터 입력폼의 메시지 객체 주소

            if(name !== 'emaildomainRef') {  
                if(ref.current.value === '') { //''빈값이면
                    msgRef.current.style.setProperty('color', 'red');
                    ref.current.focus();
                    return false;
                }
            } else if(name !== 'emaildomainRef') {  //default
                if(ref.current.value === 'default') {   //도메인일경우 default로 체크
                    ref.current.focus();
                    // alert('이메일 주소를 선택해주세요');
                    return false;
                    
            }
        }
    }
    return true;
}

        // const refEntries = [
        //     ['idRef', {...}],
        //     ['pwdRef'],
        //     [],

        // ]
        


        
    // //(refs)수정범위가 넓을경우 구조분해할당으로하면작업이번거로움
    //     let result = true;
    //     if(refs.idRef.current.value === '') {  //'' 현재 빈값이라면 메세지를 띄움
    //         alert("아이디를 입력해주세요");
    //         refs.idRef.current.focus();
    //         result = false;
    //     } else if (refs.pwdRef.current.value === '') {
    //         alert("패스워드 입력해주세요");
    //         refs.pwdRef.current.focus()
    //         result = false;
    //     }
    //     return result;
    