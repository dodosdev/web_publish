// 날짜형식 - Date 클래스
console.log(Date.now());
console.log(new Date());

let date = new Date();  //현재 사용하는 시스템의 날짜를 
console.log(date.getFullYear()); //2024
console.log(date.getMonth()+1); //11
console.log(date.getDate()); //15

let year = date.getFullYear().toString(); //2024
let month = date.getMonth() + 1; //11
let day = date.getDate(); //15
let hours = date.getHours();
let seconds = date.getSeconds();

// '2024년 11월 15일' => String.concat()
// let display = year + "년" + month + "일" + day + "일";
let display = year.concat( year, '년', month, '월', day, '일' );  
// Array 인스턴스의 concat() 메서드는 두개 이상의 배열을 병합하는데 사용. 이 메서드는 기존 배열을 변경하지 않고,새배열을 반환함
// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);
// console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]


console.log(display);



// '2024년 11월 15일' => 템플릿 리터럴
display = `${year}년 ${month}월 ${day}일 ${hours}분 ${seconds}초`;
console.log(display);

//날짜 출력 타입 지정
console.log(date.toLocaleString(`ko-KR`));
console.log(date.toLocaleString(`en-US`));

console.log(date.toLocaleDateString(`ko-KR`));
console.log(date.toLocaleDateString(`en-US`));



