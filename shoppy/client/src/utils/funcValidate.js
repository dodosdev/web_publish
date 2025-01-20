/********************************************
 *            title : 로그인 폼 체크
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
 *           title : Signup 회원가입
 *********************************************/

    //validate (빈값 체크)
    export const validateSignup = (refs, msgRefs) => {  
    // console.log('f-refs-->>', refs);
    // console.log('f-msgRefs-->>', msgRefs);


        const refEntries = Object.entries(refs.current); //{idRef: xxxx, ...}
        const msgRefEntries = Object.entries(msgRefs.current);

        console.log(refEntries);  // [[idRef, xxxx], [[pwRef, xxxx]]]
        console.log(msgRefEntries);

        //refEntries 배열객체와 msgRefEntries 배열객체의 인덱스를 동일하게 체크한다!!
        for(let i=0; i< refEntries.length; i++) {
            const item = refEntries[i];
            const name = item[0];
            const ref = item[1]; // 데이터 입력폼 객체 주소
            
            let msgItem, msgName, msgRef = null;

            if(i<refEntries.length-1){
                msgItem = msgRefEntries[i];
                msgName = msgItem[0];
                msgRef = msgItem[1]; //데이터 입력폼의 메세지 객체 주소
            }

            if(name !== 'emaildomainRef') {  
                if(ref.current.value === '') { //''빈값이면
                    msgRef.current.style.setProperty('color', 'red');
                    ref.current.focus();
                    return false;
                }
            } else {
                if(ref.current.value === 'default') {  //도메인일경우 default로 체크
                    // alert('이메일 주소를 선택해주세요');
                        ref.current.focus();
                        return false;         
                    }
                }  //for문은 바로 리턴됨
            }//for문 밖에 return true 해야함
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
    


    

/*******************************************
 *         Signup : 아이디 중복 확인 체크
 *********************************************/


    export const handleDuplicateIdCheck = (idRef, pwdRef, idMsgRef, setIdCheckResult) => {
        // console.log('id --->', refs.current["idRef"].current.value);    //확인
        if(idRef.current.value === '') {
            idMsgRef.current.style.setProperty('color','red');
            idRef.current.focus();
            return false;
        }else{
            const did = "test"; 
            if(idRef.current.value === did) {
                alert("이미 사용중인 아이디 입니다. 새로운 아이디를 입력해주세요");
                idRef.current.focus();
                return false;
            }else{
                alert("사용이 가능한 아이디 입니다");
                setIdCheckResult("complete");
                pwdRef.current.focus();
                return false;
            }
        }
    }


    //idMsgRef 메세지 주소값을 갖고있음


    
/********************************************
 *     Signup : 비밀번호 & 비밀번호 확인 체크
 *********************************************/

    export const handlePasswordCheck = (pwdRef, cpwdRef, nameRef, pwdMsgRef, cpwdMsgRef) => {


        if(pwdRef.current.value === "") {
            pwdMsgRef.current.style.setProperty('color', 'red');
            pwdRef.current.focus();
            return false;

        } else if (cpwdRef.current.value === "" ) {
            cpwdMsgRef.current.style.setProperty('color', 'red');
            cpwdRef.current.focus();
            return false;
        } else {
            if(pwdRef.current.value ===  cpwdRef.current.value) { //2번입력한비번이 동일한지비교
                alert("비밀번호가 동일합니다 ");
                nameRef.current.focus(); //비번을 동일하게 입력후 포커스로 넘어감(Tab키 이동해서확인)
                return false;
            }else{
                alert("비밀번호가 다릅니다. 다시 입력해주세요");
                pwdRef.current.value = "";
                cpwdRef.current.value = "";
                cpwdMsgRef.current.value = "";
                return false;
            }
        }

    }