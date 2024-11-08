//임의의 숫자를 입력받아
//짝수이면 빨간사과, 홀수이면 초록사과를 출력해주세요.
//1.숫자 입력받기

let number = 101;
let result = undefined;


//2.숫자 체크(짝수인지, 홀수인지)
//  결과에 따라 값 입력
//1:true, 0:false
//*if문은(%) 2일때만 실행됨 
// number %2 = 0 
//let number = 101의 뒷자리에서 홀수 짝수구분..숫자는 마음대로 넣을수 있음
if(number % 2)  result = '🍏';
else result = '🍎';
//3.값 출력
console.log(result);




//삼항연산자 : () ? : ;
let choice = undefined;
(!(number % 2))?  choice ='🍎' : choice = '🍏'; 
 // (! :반대) 0의 !반대는1임
//(!(number % 2)) ! 결과값을 반대로 출력 홀수
//*(조건식) ? 참인 경우 : 거짓인 경우;  //true, false
//* if(조건식1){조건식1이 참일때;} else if(조건식2){조건식2가 참일때;}
//  ...else {모든 조건식에 해당되지 않을때; }
console.log(choice);



//삼항연산자
let emoji = (!(number % 2))?  '🍎' : '🍏';
console.log(emoji);











