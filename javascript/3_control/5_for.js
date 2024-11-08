// 제어문 - 반복문 : for, while
// for : 정확한 반복 횟수를 알고 있을때 <-->  Array
// for((1)초기값(선언문);  (2)조건식; (4)증감식, (3)실행문 {   ///조건식이 true인경우 실행;
//     
//}
//1. 초기값을 선언한다. 증감식에따라 초기값이 변함//변수는 for{}문에서만 살아있음
// --> 초기값 변수는 for 블록에서만 실행
//2. 선언한 변수는 조건식을 통해 비교한다 --> bloolean 타입의 결과
//3. (2)번의 결과가 true이면 실행문을 실행한다.

//4. 실행문이 종료되면, 증감식을 실행한다.
//   for(초기식; 조건식; *증감식){
//	          조건식의 결과가 참인 동안 반복할(*실행문);
//   }

// (2) ~ (4)번까지 반복해서 작업을 실행한다.
//5. 조건식이 false가 되면 for 루프 블록을 빠져나온다.


// 숫자 1부터 5까지 반복해서 출력해주세요.

for(let i =1 ; i <= 10 ; i++){  // i <= 10까지 반복
    console.log(i);
}

//숫자 배열을 출력해주세요.
let numberList = ['🍕','🍔','🥓']; // [0, 1, 2]
//배열의 마지막 인덱스주소는 배열크기보다 하나작다!!
//배열의 크기 구하는 형식 : 배열객체.length
console.log(`numberList.lenght = ${numberList.length}`);

for(let i=0 ; i <= numberList.length-1 ; i++ ){   //0 ~ 4 배열의 인덱스!! (0부터시작해서 5번출력)  //numberList.length-1 배열크기의 -1
    console.log(numberList[i]);
}



// while : 종료하는 시점을 정확하게 알고 있을때 <--> true, false 값을 통해 체크



//let flag = true; 
//while(flag){  //true면 무한반복 false로 멈춤
//}


//과일리스트 출력

let fruitList = ['apple' , 'orange', 'lemon']; // obj객체 -변수와메서드를 한곳에모아줌
// let lenght = fruitList.length-1;
let emojiList = ['🍎','🍊','🍋'];


for(let k=0; k <= length ; k++){
    let fruit = fruitList[k];
    let emoji = emojiList[k];
    //lemon만 출력
    if(fruit === 'lemon'){
        console.log(emoji);
    }
    
}


