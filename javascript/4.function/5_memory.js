// function은 데이터타입 ?? object
function add(a, b){
    console.log(a + b);
    
}

let sum = add;   // call by reference
console.log(add); //add라는 이름을 가지고 있다...
console.log(sum);
// console.log(add(1,2));
add(1,3);
sum(1,2);
console.log('---프로그램 종료---');


