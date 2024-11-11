//구구단 3단 ~5단까지 출력
 //   3*1 =3 4*1=4  5*1=5
 //3*2=6
/**
 * row: 1~9, col : 3~5
 * 
 */
let start =4;
let finish =10;
for(let row=1; row<10; row++){ //가로
    let output = '';
    for(let col=start; col<finish; col++){  //세로 //3단부터6단까지
        output += `${col} * ${row} = ${row*col}\t`; //템플릿 리터럴
    }
    console.log(output); 
}




/*
*
**
*** 
 */



//사과 이모지를 이용하여 출력
/*
    🍏
    🍏🍏
    🍎🍎🍎
    🍏🍏🍏🍏
    🍏🍏🍏🍏🍏
*/
console.clear();

for(let row=1; row<=5; row++){
    let output = '';
    for(let col=1; col<=row; col++) {
        if(row === 3){   //3번째줄만 빨간사과 출력
            output += `🍎 \t`;
        }else{
            output += `🍏 \t`;
        }
    }
    console.log(output);    
}
/*
이스케이프 문자
\n 줄바꿈
\t 탭
\\역슬래시( 문자열에서 역슬래시 하나만 사용하면 열슬래시로 인식안함)
 */

