// iterable(이터러블- 반복가능한 객체) object - Iteration Protocol : 순회를 위한 규칙, 조약
// for...of, ...(Spread:전개구문), 구조분해할당(destructing object)//자동으로 분해해서 할당한다
// String(문자), 내부적 파라미터.. Array, Map, Set ...

// for...of 명령문은 반복가능한 객체 (Array, Map, Set, String, TypedArray, arguments 객체 등을 포함)에 대해서 
//반복하고 각 개별 속성값에 대해 실행되는 문이 있는 사용자 정의 반복 후크를 호출하는 루프를 생성

// "Hello~ JavaScript~!!!"
const text = new String("Hello~ JavaScript~!!");
for(let element of text) {
    console.log(`element = ${element}`); 
}

// [1, 2, 3, 4, 5]
const numbers = [1, 2, 3, 4, 5];
for(let number of numbers) console.log(numbers);

//Number 클래스 생성 및 실행
const numberClass = new Number(12345);
// for( n of numberClass ) console.log(n);
//TypeError : numberClass is not iterable
