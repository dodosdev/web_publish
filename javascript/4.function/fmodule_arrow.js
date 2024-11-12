// 모듈, 라이브러리는 공통된 기능을 구현하는 함수들의 집합
// export 키워드를 전역에서 사용할수 있도록 함
// 화살표 함수 형식으로 변환
// const 함수명 = (파라미터...) => { }



/**
 * 기본 함수 형식 : 1 ~9단 출력
 */


//gugudan(start, end);
// export function gugudan(){
export const gugudan = () =>{
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

export const singleGugudan = (dan) => {
    for(let row=1; row<=3; row++){  
        let output ='';
        // for(let col=start; col<=end; col++){
            console.log(`${dan} * ${row} = ${dan * col}`);
        // }
        console.log(output);
    } 
}


//1~9단까지
export const selectGugudan = (start, end) => {
    for(let row=1; row<=9; row++){  
        let output ='';
        // for(let col=start; col<=end; col++){
            console.log(`${start} * ${row} = ${start * col}`);
        // }
        console.log(output);
    } 
}

//7~9단 출력
gugudan();
gugudan(3);
gugudan(7, 9);


//프루츠타워를 출력하는 함수 정의

//export function fruitsTower(emoji, floor)
export const fruitsTower = (emoji, floor) =>{
    for(let row=1; row<=5; row++ ){
        for(let col=1; col<=row; col++){
            let output = '';
            for(let col=1; col<=row; col++){
                output += '💛';
            }
            console.log(output);        
        }
    }
}



// export {singleGugudan, selectGugudan, gugudan, fruitsTower};