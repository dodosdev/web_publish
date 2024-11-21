// 비동기식 처리 함수를 순차적으로 호출해서 실행하고자 할떄...
function step1(init) {
    let result = init + 1;
    // callback(result);
    return new promise().resolve(result);
}
function step2(init) {
    let result = init + 2;
    // callback(result);
    return new promise().resolve(result);
}
function step3(init) {
    let result = init + 3;
    // callback(result);
    return new promise().resolve(result);
}

step1(0)
    .then((result1) => {
        console.log(`result1 ==> ${result1}`);
        return step2(result1);
    })
    .then((result2) => {
        console.log(`result2 ==> ${result2}`);
        return step2(result2);
    })
    .then((result3) => {
        console.log(`result3 ==> ${result3}`);
    })
    .catch((error) => console.log(error));
    

    
// step1(0, (result1) => {
//     console.log(`result1 ==> ${result1}`); 
//     //step2
//     step2(result1, (result2) => {
//         console.log(`result2 ==> ${result2}`);
//         step3(result2, (result3) => {
//             console.log(`result3 ==> ${result3}`);

//         })
//     });    
// }); //(init, callback)