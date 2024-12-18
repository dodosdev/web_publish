//비교 연사나 : >, <, >=, !=, ==, === 
//실행결과 타입 :boolean
//제어문 if, while 문에서 사용!!!
/**
 * if(조건식: 3 > 2){
 *  //true
 * }else{
 *  //false
 * }
 */

console.log(3 > 2); 
console.log(3 < 2);
console.log(3 >= 3);//크거나 같다
console.log(3 <= 3);//크거나 같다
console.log(3 == '2'); //3 == 2
console.log(3 == 'A'); //3 == 67
console.log(3 === '2'); // number === string
console.log(3 === 'A'); // number === string
// = 할당 , == 값비교, === 같다

let obj1 = {
    name: '홍길동'
};
let obj2 = {
    name: '홍길순'
};
let obj3 = obj1;


console.log(obj1);
console.log(obj2);
console.log('obj1 : ${obj1}');
console.log('obj1 : ${obj2}');//결과값이 객체주소


console.log(obj1 == obj2); //주소값을 가져옴
console.log(obj1 === obj2);
console.log(typeof obj1 === typeof obj2);

console.log(obj1 == obj3); 
console.log(obj1 === obj3);
console.log(typeof obj1 === typeof obj3);

console.log(obj1.name == obj2.name); //JSON은 .으로 구분



/*
 표현식 삽입(Expression interpolation)
▶︎ ${ } 사이에 변수나 연산 등을 삽입할 수 있게 되었다.
var name = `사과`
var price = 100
var num = 5;
console.log(`${name}의 구매가는 ${price * num}원 입니다.`)

${}결과는 문자열로 자동변환됨
console.log(`${5+10} 입니다`)  // 15 입니다.
*/
