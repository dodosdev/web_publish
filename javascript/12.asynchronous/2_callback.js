// 비동기식 처리 방식에서 callback 함수 호출  // Promise : 비동기 처리를 사용할때 
// runInDelay(callback, delay)
function runInDelay(callback, seconds) {
        setTimeout(callback, seconds);// 비동기처리방식 background 창고에이동시킴
}

//runInDelay(function () {}, 1000);
runInDelay(function () {console.log(`타이머 3초 경과!!`)},3000); //background
runInDelay(() => { console.log(`타이머 1초 경과!!`)}, 1000); //background 2번때출력
console.log(`--프로그램 종료--`); //가장먼저 출력

// --프로그램 종료--
// 타이머 1초 경과!!
// 타이머 3초 경과!!