//중복된 배열을 입력받아, *중복을 제거한 후 *출력하는 함수 생성
function filter(iterable) {
    return new Set(iterable);
}

let numbers = [1,2,3,4,1,2,1,2,3,3,3,5,6,7,8,9]
let names = ["홍길동", "김영희", "최철수", "홍길동"];

let resultObj = filter(numbers);
let resultObj2 = filter(names);
console.log(numbers);
console.log(resultObj);
console.log(resultObj2);


// 사원의 이름을 입력받아, 사번을 생성하고 각각의 변수로 반환(구조분해할당)하는
//함수 작성
function createEmployeeNumber(array){
     //map은 배열전체의 요소를 대상으로하는 작업이며, 결과가 새로운 배열로 반환
    return array.map((ename) =>
        ename.concat('_', Math.trunc(Math.random() * 10000000)) //'smith_123456' 숫자
        // 블럭({})으로 묶은 상태에서 실행한 경우 반드시 return
    );   //[] 새로운배열객체  
}

let employeeNames =['smith', 'kelly']; //map을 사용하면자동으로나열됨
let [smith, kelly] = createEmployeeNumber(employeeNames); 
//smith => smith_4689961
//kelly => kelly_900511
console.log(`smith => ${smith}`);
console.log(`kelly => ${kelly}`);

