/**
    함수 정의 ::
    function 함수명(파라미터(외부에서 받아들임 (=매개변수)){  //heap으로감
        실행 로직;        //function은 여러점에서 공통적으로 사용하는경우, 공통점이 있는것들을 묶어서 사용할수있음
    }
    
    함수 호출 :: 함수명(파라미터 형식일치); //이름만 알고 있으면 언제든지 사용가능
    내장(Built-in) 함수 : 자주사용하는 기증을 함수로 구현하여 엔진에서 제공함
    - ** parseInt(문자열);  문자열을 숫자로 *변환하는 함수
    ...
    - Literal (리터럴): 문자 그대로 스크립트에 제공한 고정된 값
 */

//빌트인 함수 parseInt()호출

    let a = '100';
    console.log(a, typeof a);
    console.log(parseInt(a), typeof parseInt(a));
    console.log(parseInt(a) + 100);


    //두 개의 숫자를 입력받아, 합계를 출력하는 로직 작성
    let num1 = 10;
    let num2 = 20;
    console.log(`sum ==> ${num1 + num2}`);

//두 개의 숫자를 입력받아, 합계를 출력하는 로직 작성
//함수 정의
function add(a, b){  //var a = 호출시 입력되는 값,
    let n1 = parseInt(a);
    let n2 = parseInt(b);
    console.log(`sum ==> ${n1 + n2}`);   //heap에 올라감
} 

//두 숫자의 차를 구하되, 결과는 음수가 출력되지 않도록 함
//a는 b보다 큰 경우 결과값 출력 if
function min(a, b){
    a = parseInt(a);
    b = parseInt(b);

    if(a >=b){
        console.log(`sum ==> ${a - b}`);    
    }else{
        console.log(`a값은 b보다 커야합니다.`);
    }
}

//함수호줄 위치에 결과값 출력
add(1034243, 203421513);
min(10,20);

add('1034243', '203421513');
min('10','20');
    
    