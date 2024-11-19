// iterable object의 요소를 순회하여 출력함 // 순회 가능한 이터러블(iterable) 객체를 순회하는 반복문
//variable: 반복문 내에서 현재 순회 중인 요소를 저장할 변수의 이름을 지정합니다. 이 변수는 반복문의 각 순회에서 업데이트되어 각 요소에 대한 작업에 사용됨
//iterable: 반복하고자 하는 이터러블 객체입니다. 배열, 문자열, Map, Set, NodeList 등 다양한 객체를 순회할수 있음

// 형식 : for( variable of iterable_object ) {statement(실행문); }

// 베열의 요소를 교체하는 함수를 정의  for...of
function replace(array, origin, target ) {
    let resultArray = Array.from(array);  //resultArray 복제해서사용
    
    resultArray.forEach((element, index)=>{
        if(element === origin) resultArray.splice(index, 1, target);  //splice() 메서드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경
        //splice(2)인덱스 2에서부터 요소를 제거하기 시작할 것
        
    });

    // for(let i =0; i<resultArray.length; i++){
    //     let element = resultArray[i];
    //     if( element === origin){ //비교
    //         // resultArray[i] = target;
    //         resultArray.splice(i, 1, target);
    //     }
    //  
    // }

    // for...of
    // let index = 0;
    // for(element of resultArray){
    //     if(element === origin){  //비교
    //         //splice(인덱스, 1, 교체할요소);
    //         resultArray.splice(index, 1, target);
    //     }
    //     index++;
    // }
    return resultArray;
}

let fruits = ['🍊','🍎','🍓','🍎','🍋','🍎'];
let result = replace(fruits, '🍎','🍊'); 
            //replace(array, origin, target )=>배열에 있는 사과를 찾아서 오렌지로 교체
console.log(result);

let numbers = [1, 2, 3, 4, 2, 2, 5, 2];
let result2 = replace(numbers, 2, 7); //2-->7로 변경
console.log(result2);



/*
const iterable = "Hello"; // 문자열을 이터러블로 사용하여 문자열의 각 문자에 접근하고 출력 //문자열을 예시로 사용 배열의 각 요소가 출력

for (const char of iterable) {
    console.log(char);
}
    결과
H
e
l
l
o

*/


// 중요!!!!  
// Array.from()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from

// 구조분해할당 (배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 JavaScript 표현식)
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment