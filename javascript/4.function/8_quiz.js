//구구단을 출력하는 함수 생성
/**
 3 * 1 = 3    4 * 1 = 4    5 * 1 = 5
 3 * 2 = 6
 ...

 * 
 */
console.clear();
/**
 * 기본 함수 형식 : 1 ~9단 출력
 */

//gugudan(start, end);
function gugudan(){
    for(let row=1; row<=9; row++){
        let output ='';
        for(let col=1; col<=9; col++){
            output += `${col} * ${row} = ${row * col}\t`;
        }
        console.log(output);
    } 
}

/**
 * 구구단 선택 함수 형식 : start ~ end 단 출력
 * - 입력되는 start는 0보다 커야한다.
 * - 10단 이상은 출력되지 않도록 한다
 */

//1~9단까지
function selectGugudan(dan){
    for(let row=1; row<=9; row++){  
        let output ='';
        // for(let col=start; col<=end; col++){
            console.log(`${dan} * ${row} = ${dan * col}`);
        // }
        console.log(output);
    } 
}

singleGugudan(3);  //3단 출력
selectGugudan(7,9);  //7~9단 출력
gugudan();  //전체(1~9)출력

//7~9단 출력
gugudan();
gugudan(4,9);
gugudan(1,1);



//프루츠타워를 출력하는 함수 정의
function fruitsTower(emoji, floor){

}


//fruitsTower('💛', 5);

//fruitsTower('🍰', 10);






