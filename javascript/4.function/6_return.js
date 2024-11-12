// 함수의 실행결과 반환 키워드 :: return
function add(a, b){
    // a = parseInt(a);
    // console.log(parseInt(a) + parseInt(b));
    return( parseInt(a) + parseInt(b)); //return - output을 값으로 넘겨줌, 주어진 값을 *함수 호출 지점으로 반환함
}
let result = add(1, 2);
console.log(`result = ${result}`);



//이름, 나이를 매개변수로 입력하여, 객체를 생성한 후
//반환하는 함수를 정의해주세요.
function createObject(name, age){
    let obj = {      //heap에저장 obj에 주소가 저장됨
            name: name, //obj(키값): name
            age: age
    };
    return obj;  //obj의 주소값 반환 //리턴한 값을 어딘가에 담아둠

}

let resultObj = createObject("홍길동", 30);
console.log(resultObj);
console.log(resultObj.name);
console.log(resultObj.age);

//두 수를 입력받아 곱한값을 반환하는 함수를 작성해주세요.
//두 수는 0보다 커야함.

console.clear();
function multi(a, b){
    let result = 0;
    if(a>0 && b>0){
        result = a * b;  //{}블럭에 싸여였으면(로컬변수) 그안에서만 실행된다. 
    }else{
        result = "a와 b는 0보다 커야합니다";     
    }
    return result;  //return은 마지막에 작성//빠져나옴
}
let result2 = multi(10, 2);  //숫자가 0보다크지 않으면 /-->/    }else{result = "a와 b는 0보다 커야합니다"; } 메세지가나옴
console.log(result2);




//전역변수(Global variable) 로컬변수
//let a = undefined;
//let obj = null;
//const START_COUNT = 0;


///function aa{
//기능을 구현하는 작업진행
//변수 선언시 반드시 초기화!!
//지역변수, 로컬(Local variable)
//let result = 0;
//}