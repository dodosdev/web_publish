//object : Array(배열 : []),  JSON({})..
let apple = null;
apple = {
    name:'apple',
    color:'red',
    display:'🍎'
};
console.log(apple);
console.log(apple.name);/*. 특정부분만 보여짐 */
console.log(apple.color);
console.log(apple.display);


//orange JSON 객체 생성 후 출력
let orange = {
    name:'orange',
    color: 'orange',
    display: '🍊'
};
console.log(orange);
console.log(orange.name);
console.log(orange.color);
console.log(orange.display);


// 1~5까지 출력
let numberList = [1, 2, 3, 4, 5];
console.log(numberList);
console.log(numberList[0]); //배열은[]로 구분 
console.log(numberList[5]); //undifind로 나옴
console.log(numberList[4]); 