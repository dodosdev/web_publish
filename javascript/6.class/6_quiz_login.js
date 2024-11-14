//로그인 체크를 위한 클래스 정의

/**querySelector()**는 특정 name,id,class를 제한하지 않고 css선택자를 사용하여 요소를 찾습니다.
같은 id 또는 class 일 경우 스크립트의 최상단 요소만 로직에 포함합니다.
querySelector(#id) => id 값 id를 가진 요소를 찾습니다. querySelector(.class) => class 값 class를 가진 요소를 찾습니다.*/


class User {
    #id;  //html의 id명꼭 맞추기!!
    #pass;
    constructor(id, pass) {
        this.#id = id;
        this.#pass = pass;
    }
    get id() { return this.#id; }
    get pass() { return this.#pass; }

    set id(id) {this.#id = id; }
    set pass(pass) {this.#pass = pass; }
}


/**
 * 로그인 버튼 클릭시 호출하는 함수
 */

let user = null;  //전역변수 선언
const DID ="test"; //아이디/ 패스워드 설정
const DPASS = "1234";  

function loginCheck() {
    let id = document.querySelector("#id");  //id값이 입력되는 폼객체
    let pass = document.querySelector("#pass");

    if(id.value === ""){
        alert("아이디를 입력해주세요");
        id.focus();
    } else if(pass.value === "") {
        alert("패스워드를 입력해주세요");
        pass.focus();
    } else {
        //id, pass ==> User 클래스 객체 생성과 처리작업
        user = new User(id.value, pass.value);
        console.log(user.id, user.pass);
        

        if(DID === user.id && DPASS === user.pass) alert("로그인 성공!!"); //(DID === user.id && DPASS === user.pass) 비교처리
        else alert("로그인 실패!!");
        
    }
}





// const hong = new User("hong1234", "1234");
// console.log(`id: ${hong.id}, pass: ${hong.pass}`);
// hong.id = "hong12";
// hong.pass = "3456";
// console.log(`id: ${hong.id}, pass: ${hong.pass}`);



