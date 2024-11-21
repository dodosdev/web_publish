
function a() {  //동기식
    c(); // rerurn address(복귀 주소)
    console.log(`-------> a function!!`);
}
function b() {
    setTimeout(() => {console.log(`1초후 setTimeout 함수실행!! `);}, 1000);  //1000-->1초
    console.log(`-------> b function!!`);
}
function c() {
    b();
    console.log(`------> c function!!`);
}

a();

// -------> b function!!
// ------> c function!!
// -------> a function!!
// 1초후 setTimeout 함수실행!! 
