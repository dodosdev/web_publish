//  제어문 - 조건문 : if, while, do~while
//  if(조건식:비교연산자포함){조건식이 참인 경우 실행;}
//  if(조건식){조건식이 참인 경우;} else {조건식이 거짓인 경우;}

// *삼항 연산자(React에서많이사용) : (조건식) ? 참인 경우 : 거짓인 경우;  //true, false
//  if(조건식1){조건식1이 참일때;} else if(조건식2){조건식2가 참일때;}
//  ...else {모든 조건식에 해당되지 않을때; }



///////////////////////////////////////////////////////
//입력되는 과일명이 apple.인 경우에는 사과이모지 출력
//사과이외의 과일은 이름만 출력!!
let fruit = 'apple';
if(fruit === 'apple'){
    console.log('🍎');
}else{
    console.log(fruit); //아닐경우 orange 텍스트로 출력
    
}
// console.log('선택한 과일은 🍎가 아닙니다');



//위의 조건식을 삼항연산자로 작성해보세요
let display = undefined; //undefined 아직 들어가지 않은 상태
(fruit === 'apple') ? (display = '🍎') : (display = fruit);
console.log(display);




//연습////////////////////////////////////////////////////////
//점심메뉴 : pizza ='🍕 , hotdog - '🌭'
//요구사항 : 점심메뉴에 피자와 핫도그가 있다. 피자와 핫도그 중에서 선택한 메뉴에 
//이모지가 출력되도록 한다.

let menu = undefined;
menu = 'hotdog';
if(menu === 'pizza') console.log('🍕'); //길이가 짧을경우{}생략가능
else console.log('🌭');


if(menu === 'pizza'){
    console.log(menu);
    console.log('🍕');
}else console.log('🌭');



// 삼향연산자
let choiceMenu = undefined;
(menu === 'pizza') ? choiceMenu='🍕' : choiceMenu='🌭';
console.log(choiceMenu);





/////////////////////////////////////////////
//학생명이 홍길동, 홍길순, 김영희 인지 체크하여
//해당하는 경우 이름을 출력하고,
//해당하지 않는 경우 '해당 학생 없음'으로 출력해주세요.
// 출력포맷 : 실행결과 ==> 
let name = undefined;
let result = undefined;//출력(console.log를 매번하지않고 중간결과를 저장함
name =  '김영식';
if(name === '홍길동'){
    // console.log('실행결과 ==> ${name}');
    result = name;
}else if(name === '홍길순'){
    // console.log('실행결과 ==> ${name}');
    result = name;
}else if(name === '김영희'){
    // console.log('실행결과 ==> ${name}');
    result = name;
}else{
    // console.log('실행결과 ==> 해당 학생 없음');
    result = '해당 학생 없음';
}
console.log(`실행결과 ==> ${result}`);
