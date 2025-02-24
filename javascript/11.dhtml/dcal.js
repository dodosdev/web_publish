import  sum, {sub, mul, div } from './commons.js';

// DHTML 형식으로 계산기 프로그램

initForm();

/** 계산기 폼을 생성하는 함수 */
function initForm() {
    let output =`
        <h1>DHTML - Calculator</h1>
        <ul>
            <li>
                <input type="text" id="number1" placeholder="첫번째 숫자">
                <input type="text" id="number2" placeholder="두번째 숫자">
            </li>
            <li>
                <button type="button" class="button" data-operation="sum">➕</button>
                <button type="button" class="button" data-operation="sub">➖</button>
                <button type="button" class="button" data-operation="mul">✖</button>
                <button type="button" class="button" data-operation="div">➗</button>
            </li>
            <li>
                <h3 id="result">Result : </h3>
            </li>
        </ul>
    `;

    
    /** 화면출력 */
    document.querySelector("#content").innerHTML = output;

    /** 버튼 이벤트 처리 */
    let buttonList = document.querySelectorAll(".button");
    // console.log(buttonList); 

    buttonList.forEach((button) => {  //콜백함수형식
        
        button.addEventListener('click', () => {
            let number1 = document.querySelector("#number1").value; //button가져오기
            let number2 = document.querySelector("#number2").value;

            let result = 0;
            let operation = button.dataset.operation;

            switch(operation) {
                // case 'sum' : result = parseInt(number1) + parseInt(number2) ; break; 
                case 'sum' : result = sum(number1, number2) ; break; 
                //'sum'이라면 어떤값을 더할것인지//문자가 숫자로
                case 'sub' : result = sub(number1, number2) ; break;   
                // case 'sub' : result = number1 - number2; break;  
                case 'mul' : result = mul(number1, number2) ; break;   
                // case 'mul' : result = number1 * number2; break;  
                case 'div' : result = div(number1, number2) ; break;   
                // case 'div' : result = number1 / number2; break;  
            }

            console.log(`result => ${result}`);
            document.querySelector("#result").textContent = `Result : ${result}`; //입력한 결과값이나오는부분
            

        });

    });
    


}//initForm

// /** sum() */
// function sum(number1,number2) {
//     return parseInt(number1) + parseInt(number2);  //입력한값을보여줌
// }
// /** sub() */
// function sub(number1, number2) {
//     return parseInt(number1) - parseInt(number2);  
// }

// /** mul() */
// function mul(number1, number2) {
//     return parseInt(number1) * parseInt(number2); 

// }
// /** div() */
// function div(number1, number2) {
//     return parseInt(number1) / parseInt(number2); 
// }