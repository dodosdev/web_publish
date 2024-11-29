




/**********************************************************
*   패스워드/ 패스워드 중복체크
**********************************************************/

function passwordCheck() {
    const pwd = document.querySelector("#pwd");
    const cpwd = document.querySelector("#cpwd");
    const pwdMsg = document.querySelector("#error-msg-pwd");
    const cpwdMsg = document.querySelector("#error-msg-cpwd");

    if(pwd.value === "") {
        pwdMsg.style.color = "red";
        pwd.focus();
    } else if(cpwd.value === "") {    //비교할수 있는 값이 있는지 체크하기
        cpwdMsg.style.color = "red";
        cpwd.focus();
    } else {
        if(pwd.value === cpwd.value) {
            alert("패스워드가 동일합니다");
        }else {
            alert("패스워드가 다릅니다. 다시 입력해주세요");
            pwd.value="";
            cpwd.value="";
            pwdMsg.style.color = "red";
            cpwdMsg.style.color = "red";

        }
    }

}







/**********************************************************
*   아이디 중복체크
**********************************************************/

function idCheck(event) {
    const did = "test"; //test입력시 다시입력하라는 메세지
    const id = document.querySelector("#id");
    const idMsg = document.querySelector("#error-msg-id");

    if(id.value === "") {  //데이터가 준비될수 있도록
        idMsg.style.color = "red";
        id.focus();
    } else {  
        if(did === id.value.trim()) {
            alert("이미 사용중인 아이디입니다. 디시 입력해주세요");
            id.focus();
        } else {
            alert("사용이 가능한 아이디입니다."); //사용이 가능할경우 버튼컬러가 gray로 바뀜
            document.querySelector("#idCheckResult").value = "success"
            console.log(document.querySelector("#idCheckResult").value);
            

            // event.target.style.backgroundColor = "gray"; //onclick="idCheck(event)
        }
    }

}






/**********************************************************
*   회원가입 폼 체크 
*   //값이있는지없는지체크 입력을하지않으면 다음으로 넘어가지않음
**********************************************************/

function joinFormCheck() {
    const id = document.querySelector("#id");
    const pwd = document.querySelector("#pwd");
    const cpwd = document.querySelector("#cpwd");
    const name = document.querySelector("#name");
    const phone = document.querySelector("#phone");
    const emailname = document.querySelector("#emailname");
    const emaildomain = document.querySelector("#emaildomain");
    const idCheckResult = document.querySelector("#idCheckResult");
    
    
    const idMsg = document.querySelector("#error-msg-id");
    const pwdMsg = document.querySelector("#error-msg-pwd");
    const cpwdMsg = document.querySelector("#error-msg-cpwd");
    const nameMsg = document.querySelector("#error-msg-name");
    const phoneMsg = document.querySelector("#error-msg-phone");
    const emailnameMsg = document.querySelector("#error-msg-emailname");


    if(id.value === "") {
        idMsg.style.color = "red";
        id.focus();
    } else if (pwd.value === "") {
        pwdMsg.style.color = "red";
        pwd.focus();
    } else if (cpwd.value === "") {
        cpwdMsg.style.color = "red";
        cpwd.focus();
    } else if (name.value === "") {
        nameMsg.style.color = "red";
        name.focus();
    } else if (phone.value === "") {  //else if (phone.value === "" && ) 비교
        phoneMsg.style.color = "red";
        phone.focus();
    } else if (emailname.value === "") {
        emailnameMsg.style.color = "red";
        emailname.focus();
    } else if (emaildomain.value === "default") {
        emaildomain.style.outlineColor="red";
        emaildomain.focus();
    } else if (idCheckResult.value === "default") {
        alert("아이디 중복체크를 해주세요");
    } else {
        alert("가입성공!!!!");
    }

}


function handleChangeJoin(event) {
    const idMsg = document.querySelector("#error-msg-id");
    const pwdMsg = document.querySelector("#error-msg-pwd");
    const cpwdMsg = document.querySelector("#error-msg-cpwd");
    const nameMsg = document.querySelector("#error-msg-name");
    const phoneMsg = document.querySelector("#error-msg-phone");
    const emailnameMsg = document.querySelector("#error-msg-emailname");
    const emaildomain = document.querySelector("#emaildomain");

    if(event.target.id === "id") {
        (event.target.value.trim().length !== 0)
            ? idMsg.style.color ="green"
            : idMsg.style.color ="red";
    } else if (event.target.id === "pwd") {
        (event.target.value.trim().length !== 0)
            ? pwdMsg.style.color ="green"
            : pwdMsg.style.color ="red";
    } else if (event.target.id === "cpwd") {
        (event.target.value.trim().length !== 0)
            ? cpwdMsg.style.color ="green"
            : cpwdMsg.style.color ="red";
    } else if (event.target.id === "name") {
        (event.target.value.trim().length !== 0)
            ? nameMsg.style.color ="green"
            : nameMsg.style.color ="red";
    } else if (event.target.id === "phone") {
        (event.target.value.trim().length !== 0)
            ? phoneMsg.style.color ="green"
            : phoneMsg.style.color ="red";
    } else if (event.target.id === "emailname") {
        (event.target.value.trim().length !== 0)
            ? emailnameMsg.style.color ="green"
            : emailnameMsg.style.color ="red";
    } else if(event.target.id  === "emaildomain") {
        (event.target.value.trim() !== "default")
            ? emaildomain.style.outlineColor ="green"
            : emaildomain.style.outlineColor ="red";
    }
    
}




/**********************************************************
*   로그인 - 아이디 실시간 체크
**********************************************************/

function handleChange(event) {
    const idMsg = document.querySelector("#error-msg-id");
    const pwdMsg = document.querySelector("#error-msg-pwd");

    if(event.target.id === "id") {
        (event.target.value.trim().length !== 0) ? 
            idMsg.style.color="green"  // 입력하면green으로바뀜
            : idMsg.style.color="red";

    } else {
        (event.target.value.trim().length !== 0) ? 
            pwdMsg.style.color="green"
            : pwdMsg.style.color="red";
    }
    
}




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


/**********************************************************
*  공지 뉴스 - 검색폼 -test 20241129
**********************************************************/


function noticeFormCheck() {
    const notice = document.querySelector("#notice");
    const noticeMsg = document.querySelector("#error-msg-notice");

    if(notice.value === "") {
        noticeMsg.style.color = "red";
        notice.focus();
    } else if (notice.value === "") {
        alert("검색어를 입력해주세요");
    } 

}


function handleChangeNotice(event) {
    const noticeMsg = document.querySelector("#error-msg-notice");

    if(event.target.notice === "notice") {
        (event.target.value.trim().length !== 0)
            ? noticeMsg.style.color ="green"
            : noticeMsg.style.color ="red";
    }
    
}


/**********************************************************
*  header 영화 검색 - 20241129
**********************************************************/


function loginFormCheck() {
    const search = document.querySelector("#search");

    if(id.value === '') {
        document.querySelector("#error-msg-id").textContent = '아이디를 입력해주세요';
        msgId.style.fontSize = '12px';
        msgId.style.color = 'tomato';
        id.focus();
    } else {
        alert('입력완료!');
    }
    
}




