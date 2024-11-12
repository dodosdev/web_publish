
// 콜백함수는 함수 호출시 파라미터 인자로 제공되는 함수 형식을 의미함
// 비동기식
// const add = (a, callback) => { //callback은 주소
//         callback(a);           //callback 함수안에서 또다른 함수를 호출
// }

// const add2 = (x) => {
//     console.log(x);
    
// }

// add(100, add2());

const job = (a, callback) =>{
    callback(a); // a <--print라는 값을 갖고있음
}

const job2 = (a, b, callback) => {
    callback(a, b);
}

const print = (a) => console.log(a);
const printSum = (a, b) => {  //printAll<--heap의 주소 갖고있음 //갔다가 돌아오는 주소
    console.log(a + b);
    
}
job(100, print);
job2(100,200, printSum);




//setTimeout 함수호출
console.clear();
setTimeout((second) => console.log(`${second} 초 후 실행!!`), 3000, 3);//1 : 1초 //Web API(백그라운드 영역)에 저장되있다가 실행됨


