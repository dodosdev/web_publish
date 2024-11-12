// 함수의 값 전달 인자
//다양한 값을 받음 --> 파라미터(parameter), argument, 매개변수

console.clear();

function add(a, b){ 
    return a + b;
}
function add2(...numbers){ //Spread operator(전개 구문)
    return numbers;
}
function add3(a, b, ...datas){//...배열로 저장
    console.log(a);
    console.log(b);
    console.log(datas);
    
}

//함수 호출
let sum = add(100, 200);//외부에 값을 넣어줌
let sum2 = add2(100);
//주소값들어감

console.log(`sum = ${sum}`);
console.log(`${sum2}`);   //표현식 삽입(Expression interpolation) ${ } 사이에 변수나 연산 등을 삽입할수있음
add3(1,5,6,7);





//Spread syntax - 스프레드 연산자
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax
