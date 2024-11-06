//한줄주석
/* 여러줄 주석 */


/**
 *  변수명 선언 규칙
 *  - 라틴어 (0~9), a~z, A~Z)
 *  - 특수문자 ($, _ 사용가능)
 *  - camel case : ex) camelCase
 *  - snake case : ex) snake_case
 * 
 *  주의사항
 * - 숫자로 시작하면 X
 * - 예약어(키워드) 사용 X
 * - 특수문자 ($, _) 사용가능
 * - 이모지 사용불가
 */


//camelCase
let myName = '홍길동'
let myAge = 20;
console.log(myName);
console.log(myAge);

 //대소문자 구분함 a = 10;, A = 10;

 //snake_case
let audio_name = '삼성';
let audio_color = 'Red';
console.log(audio_name);
console.log(audio_color);

//템플릿 리터널 :: 저의 이름은 홍길동이고, 나이는 20입니다.
let output2 = `저의 이름은 ${myName}이고, 나이는 ${myAge}입니다`;  /* `` 문자로 인식합*/
console.log(output2);


// 상수 선언 :: 변수, 상수는 프로그램의 상단에 위치!!!
// 상수 선언시 모두 *대문자*로 SNAKE_CASE로 선언하면 Good!
const AUDIO_DEVICE_START = 1;
const AUDIO_DEVICE_CONTINUE = 2; /*예약어 */
const AUDIO_DEVICE_FINISH = 0;

