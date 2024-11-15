// String 클래스의 메소드 정리
let name ="홍길동";
let sname = new String("홍길동");
console.log(typeof name, typeof sname);
console.log(name === sname);
console.log(name === sname.valueOf());

let text = "Hello JavaScript~~~!!!"; 
console.log(text.charAt(0));
console.log(text.charAt(3));
console.log(text[0]);
console.log("Welcome~".concat(text)); //문자 결합
console.log(text.indexOf('a')); //앞에있는문자를 return
console.log(text.toUpperCase()); //대소문자
console.log(text.toLowerCase());

// 입력폼 -->          --> DB 저장시 소문자 저장

//문자열 추출
console.log(text.substring(0, 2)); //end자릿수 전까지 추출
console.log(text.substring(4, 8)); //end자릿수 전까지 추출
console.log(text.slice(0, 2)); //end자릿수 전까지 추출
console.log(text.slice(4)); //end자릿수 전까지 추출
console.log(text.slice(-3)); //뒤에서부터 시작

//문자열 공백 삭제
text = '   JavaScript!    ';
console.log(text.trim());
text = '   Java  Script!   ';
console.log(text.trim());


//구분자를 이용하여 문자열 추출
const fruit = '🍑 ,🍋 ,🍍 ,🍈';
const fruitArray = fruit.split(',');
console.log(fruit);
console.log(fruitArray); 





