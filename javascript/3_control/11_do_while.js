// do ~ while : while 문의 조건식 체크 전 무조건 최초로 실행하도록 구현하는 로직에 적용함
// while 문은 조건문이 참일 때 실행되는 반복문이다. 조건은 문장안이 실행되기 전에 참, 거짓을 판단한다. 거짓이라면, 문장은 그냥 while 반복문 후로 넘어간다.
/*
    do{
    최초 한번 먼저 실행되는 실행문;
    }while(조건식){
        실행문;
    }
*/


//메뉴 선택
let flag = false;
let menu = 0;
do{  //먼저 보여줄때
    console.log( `1 : 🍕 \t  2:🍿 \t  0:종료` );
    console.log(`[사용법] : 키보드 숫자로 입력해주세요.`);

}while(flag) {
    if(menu === 1){
        console.log(`선택하신 메뉴는 🍕입니다.`);
        //while loop 자연스럽게 종료!!
        flag = false;
    }else if(menu === 2){
        console.log(`선택하신 메뉴는 🍿입니다.`);    
        //while loop 자연스럽게 종료!!
        flag = false;
    }else if(menu === 0){
        console.log(`선택을 종료합니다`);    
        //while loop 자연스럽게 종료!!
        flag = false;
    }
}
