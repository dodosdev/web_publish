// 자바스크립트 호출시 HTML의 body를 DOM에 먼저 로딩 후 실행하도록 하는 함수들
// window.onload(), document.ready(), DOMContentLoaded()

window.addEventListener('DOMContentLoaded', function(){
    initForm();
});




// counter 폼 생성 함수
function initForm() {
    let output = `
        <h1>DHTML - Counter</h1>
        <div class="counter_contaner">
        <div id="number">0</div>
        <button type="button" class="button" data-operation="increment">increment</button>
        <button type="button" class="button" data- operation="decrement">decrement</button>
    </div>
    `;

    
    
    //counter 폼 출력
    document.querySelector("#content").innerHTML = output; //innerHTML형태로 #content에 넣음
    
    // let number = document.querySelector("#number").textContent;
    // console.log(`number = ${number}`);



    // button 이벤트 처리
    let buttons = document.querySelectorAll(".button"); // 똑같은 클래스를가지고 있는 버튼
    // 결과:  NodeList(2) [button.button, button.button]
    console.log(buttons);
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let flag = button.dataset.operation;
            let number = document.querySelector("#number").textContent;

                if(flag === 'increment') {
                    document.querySelector("#number").textContent = ++number; //++증가해서 넣을때   
                } else {
                    if(number > 0)
                        document.querySelector("#number").textContent = --number;
                }    
        });
    });
    
}






// //counter 증가/감소 버튼
// function counter(flag){
//     let number = document.querySelector("#number").textContent;

//     if(flag === 'increment') {
//         document.querySelector("#number").textContent = ++number; //++증가해서 넣을때

//     } else {
//         if(number > 0)
//         document.querySelector("#number").textContent = --number; //++증가해서 넣을때
//     }    
    
// }