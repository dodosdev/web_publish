/**
 * 공통모듈
 */

/** sum(number1, number2) */
export default function sum(number1,number2) {  
    //자주사용하는 코드는 export default를 붙임  index.html에 import  sum, {sub, mul, div }
    return parseInt(number1) + parseInt(number2);  //입력한값을보여줌
}
/** sub(number1, number2) */
export function sub(number1, number2) {
    return parseInt(number1) - parseInt(number2);  
}

/** mul() */
export function mul(number1, number2) {
    return parseInt(number1) * parseInt(number2); 

}
/** div() */
export function div(number1, number2) {
    return parseInt(number1) / parseInt(number2); 
}