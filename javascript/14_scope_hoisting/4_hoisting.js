// 호이스팅(Hoisting) : 코드 실행 전 메모리에 객체를 선언하고 할당하는 작업

// 함수호출
hoist1();
hoist2();

function hoist1() { // 호출되기전에 메모리에 저장됨
    console.log("호이스팅 1");
}

const hoist2 = () => { // let, const가 호출이 되기전에 선언이 먼저 되어있어야한다
    console.log("호이스팅 2"); // 호이스팅 되지 않기때문에 에러가뜸
}

hoist2();  //arrow 함수는 반드시 선언후 함수 호출!!
