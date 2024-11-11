//논리연산자 :&&(And) , ||(OR)
/*
    (논리식1) && (논리식2) = 결과값
        true       true    = true
        true       false   = false
        false      true   = false
        false      false   = false
        
        

    (논리식1) || (논리식2) = 결과값
        true       true    = true  //앞에가 true면 true
        true       false   = true
        false       true   = true
        false       false   = false
*/

let a = 1;
let b = 2;
console.log((a < b) && (b > a)); //true && true =true
console.log((a < b) && (b < a)); //true && false =false
console.log((a = b) && (b > a)); //false && true = false
console.log((a = b) && (b < a)); //false && false = false


console.log((a < b) || (b > a)); //true && true = true
console.log((a < b) || (b < a)); //true && false = true
console.log((a === b) || (b > a)); //false && true = true
console.log((a === b) || (b < a)); //false && false = false


// 임의의 숫자를 입력받아, 1~9 까지의 범위에 포함되면 출력
let number = 11;
if((number > 10) && (number < 10)) {  //&&연산의 경우
    //true            false---->false
    //false            true  ---->false :: shortcut 연산!! // &&는 false
    // 순서 관계없이 false가 나오면 false가 결과값
        console.log(`number는 사용가능한 숫자[${number}]입니다`);
}else{
    console.log(`number를 다시 입력해주세요`);

}


// 임의의 숫자를 입력받아, 1보다 크면 출력
let number2 = 11;
if((number2 > 0) || (number2 < 10)) {  // ||(or)연산인 경우 true값이 앞에 오도록 함
    //true             false---->true :: shortcut 연산!!
    //false            true  ---->true
        console.log(`number2는 사용가능한 숫자[${number2}]입니다`);
}else{
    console.log(`number2는 사용가능한 숫자입니다`);

}