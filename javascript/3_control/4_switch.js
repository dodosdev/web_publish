//제어문 - 조건문 : switch(조건) ~ case
//switch에서는 break를 꼭 사용
/**
 * 
 * switch(숫자,문자){
 *  case 숫자, 문자 :
 *      실행문;
 *      break;
 *  case ~~
 *  default :
 *      실행문;
 * }
 * 
 */



// 0: 월요일, 1: 화요일, 2:수요일
//약속해 놓은 숫자로 비교
let useage = `[0]월요일, [1]화요일, [2]수요일`;
let day = 3424; 
let resultDay = undefined;
switch(day){
    case 0:
        resultDay = "월요일"; break;  //;세미콜론을 안주면 한줄이됨
    case 1:
        resultDay = "화요일"; break; 
    case 2:
        resultDay = "수요일"; break; 
    default:
        console.log(`사용법: ${useage}`); //설정한 요일을 (숫자 입력)선택하지 않았을때
}
if(!(resultDay === undefined)){
    console.log(`선택한 요일은 : [${resultDay}] 입니다`);
}




//임의의 숫자를 입력받아
//짝수이면 빨간사과, 홀수이면 초록사과를 출력해주세요.

let number = 101;
let result = undefined;
switch(number % 2) { //(number % 2) 모듈연산
    case 0 : 
        result = '🍎';
        // break;
    case 1 :
        result = '🍏';
        break; //break를 만날때까지 실행
    default:
        result = '해당 과일 없음';
}
console.log(result);
