// 배열의 '🍎' 요소를 '🍓'로 교체해 주세요.
let fruits = ['🍎', '🍈', '🍉'];
// output => ['🍓','🍈', '🍉']

//1.1 for문의 index 주소 활용
for(let i=0; i<fruits.length; i++){
    if(fruits[i] === '🍎') fruits[i] = '🍓';//비교후 딸기로 변경
    console.log(fruits[i]);
    
}


// 1.2 함수 : 파라미터(배열객체, old, new(교체할새로운값))
// 교체한 값을 콘솔창에 출력
function reaplace(array, oldValue, newValue){
    for(let i=0; i<array.length; i++){
        if(array[i] === oldValue) array[i] = newValue;
        // result += `${array[i]}\t;
        
    }
    console.log(result);
}




reaplace(fruits, '🍓', '🍓');
let numbers = [1, 2, 3, 1, 2, 1, 5];
reaplace(numbers, 1, 9);

//1.3 함수 : 파라미터(배열객체,old, new)
//배열타입으로 객체를 반환
function reaplace2(array, oldValue, newValue){
    let resultArray = Array.from(array);
    for(let i=0; i<resultArray.length; i++){
        if(resultArray[i] === oldValue) resultArray[i] = newValue;

    }
    return resultArray;
}


let names = ['hong', 'kim', 'park', 'hong'];
let resultObj = replave2(names, 'hong', 'gong');
console.log(resultObj);

