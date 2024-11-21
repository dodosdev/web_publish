// 빌트인 클래스인 Promise를 통해 비동기식 처리
let promise1 = new Promise((resolve, reject) => { 
    // resolve, reject<---성공했는지 실패했는지 결과를 보여줌
    // 비동기식 로직
    setTimeout(() => {
        resolve('success');
        // resolve('fail');
    }, 3000);
});

promise1
    .then((result) => {console.log('3초 경과!!');})  //1시간 경과후 callback queue에 들어가는 실행함수 정의
    .catch((error) => {console.log(error);
    });