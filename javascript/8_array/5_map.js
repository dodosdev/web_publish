// map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// https://velog.io/@sming0112/Temp-Title

// 순회 메소드가 적용되는 map함수는 파라미터 인자로 콜백함수를 입력받아
// 처리한 결과를 새로운 배열객체로 생성하여 반환함!!!

//리액트에서 filter, map, forEach 사용많이함

let numbers = [1, 2, 3, 4, 5];
let fnumbers = [1.001, 2.002, 3.03, 4.04, 5.05];

//numbers 배열요소에 각각 10을 곱한 결과 출력
let numbers2 = numbers.map((item) => item * 10); //[10, 20 ... 50] 
console.log(`numbers2 = ${numbers2}`);


// fnumbers 배열 요소의 소수점을 절삭하여 출력
let fnumbers2 = fnumbers.map((x) => Math.floor(x));  //[1, 2, 3, 4, 5]
// let fnumbers2 = fnumbers.map((x) => Math.floor(x) );  //[1, 2, 3, 4, 5]
console.log(`fnumbers2 = ${fnumbers2}`);

//배열의 요소로 objects literal 값이 있는 경우
let objects = [
    {name: "홍길동", age:20},
    {name: "김철수", age:20},
    {name: "최영희", age:20}
];
objects.forEach((obj, idex) => {console.log(idex, obj)});

// let a = {name:"홍길동"}; //key:value
// a['name'] = "홍길동"; // a['key값'] = "value값";


// [ {홍길동: 홍길동, age:20} ~~]
// let a = { key:value}
// a[key]
//홍길동, 최영희 이름을 가진 학생정보만 배열출력
let object2 = objects.map((obj) => { //obj ==> name: "홍길동"
    let rObj = {};
    if(obj.name === "홍길동"){
        rObj = obj;
    
    }else if (obj.name === "최영희"){
        rObj = obj;
    }
    return rObj;

    // let resultObj = {};
    // resultObj[obj.name] = obj.Value; // key {}
    // resultObj[obj.name] = "name";    // value
    // resultObj[obj.age] = obj.value;  
    // resultObj[obj.age] = "age";     
    // return resultObj;
}); //[ {}]
console.log(object2);



