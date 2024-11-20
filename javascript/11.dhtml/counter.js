//counter 증가/감소
function counter(flag){
    let number = document.querySelector("#number").textContent;

    if(flag === 'increment') {
        document.querySelector("#number").textContent = ++number; //++증가해서 넣을때

    } else {
        if(number > 0)
        document.querySelector("#number").textContent = --number; //++증가해서 넣을때
    }    
    
}




// counter 증가
function increment(){
    // alert('증가');
    let number = document.querySelector("#number").textContent;
    document.querySelector("#number").textContent = ++number; //++증가해서 넣을때
    
//     let number2 = document.querySelector("#number2").value;
    
}


// counter 감소
function decrement(){
    let number = document.querySelector("#number").textContent;
    if(number > 0)
        document.querySelector("#number").textContent = --number;
}