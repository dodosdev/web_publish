// filter
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
console.log(words.filter((item) => { return item.length > 6}));  //filter도 새로운 배열 만들어줌 //[]  //{}블럭이 있는경우는 반드시 return을 줘야한다
//콜백함수에 { }을 추가하면 반드시 return 키워드를 붙여서 값을 반환!!
// console.log(words.filter((item) => { return item.length > 6})); 

let numbers = [1, 2, 3, 4, 5, 6, 7];

// 5이상 숫자 출력
let array = [];
numbers.forEach((x) => {
    if(x >= 5) array.push(x);
} );
console.log(array);

// let array2 = numbers.filter((x) => {return x >= 5}); //[]
let array2 = numbers.filter((x) =>  x >= 5 ); //[]
console.log(array2);


let numbers2 = [1.4, 2.5, 3.2, 4.7, 5, 6, 7]
// 3보다 큰 숫자만 출력
console.log(numbers2.filter((x) => x>=3));

//numbers2의 모든 값을 반올림한 후 3보다 크거나 같은 값을 출력
console.log(numbers2.map((x)=> Math.round(x)).filter((x) => x>=3));



// 아이템 배열의 전체 길이수를 반환하는 함수
// 아이템을 검색하여 갯수를 리턴
function searchItem(array,sItem){
    //array.filter((item) => {return item === sItem});
    return array.filter((item) => item === sItem).length;
    
}

function searchItem(array, sItem){
    let count = 0;
    array.forEach((item) => {
        if(item === sItem) count++;
    });
    return count;
}



let fList = ['🧁','🍧','🍨','🥗','🧁'];
let nList = [1, 2, 4, 5, 7, 4, 6, 45, 33, 90, 4, 4]; //10

console.log(`count ==> ${searchItem(fList, '🧁')}`); //
console.log(`count ==> ${searchItem(nList, '4')}`); //




/**
 * 자바스크립트 화살표 함수 - Arrow function expressions
 * 화살표 함수는 function 키워드 대신 =>기호(화살표)를 사용하여 함수를 사용하여 기존의 함수보다 간단하고 간결하게 작성할수있음
 * 
    const add = (a, b) => {
    const sum = a + b;
    console.log("Sum:", sum);
    
    // return 키워드를 생략할 수 없습니다.
    return sum;
};

const result = add(3, 5);
console.log("Result:", result); // 결과: Sum: 8, Result: 8
 */





