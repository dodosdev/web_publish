


/**********************************************************
*  로그인 폼 체크
**********************************************************/
function loginFormCheck() {
    const id = document.querySelector("#id");
    const pwd =  document.querySelector("#pwd");
    const msgId =  document.querySelector("#error-msg-id");
    const msgPwd =  document.querySelector("#error-msg-pwd");

    if(id.value === '') {
        document.querySelector("#error-msg-id").textContent = '아이디를 입력해주세요';
        msgId.style.fontSize = '12px';
        msgId.style.color = 'tomato';
        id.focus();
    } else if (pwd.value == '') {
        document.querySelector("#error-msg-pwd").textContent = '패스워드를 입력해주세요';
        msgPwd.style.fontSize = '12px';
        msgPwd.style.color = 'tomato';
        pwd.focus();
    } else {
        // 아이디 비교로직 또는 함수호출!!
        alert('입력완료!');
    }
    
}