//객체 생성자 함수 정의와 사용법 익히기  // *(모델링) 연관있는것끼리 묶기
// function Fruits - 생성자 함수는 대문자로 시작함!!
//function Fruits (파라미터(외부에서 받아야함)) {}
function Fruits (name, color, emoji) {  // function Fruits - 생성자 함수는 대문자로 시작함!!
    //Field
    this.name = name; //name =  값
    this.color = color; //this는 callstack변수로 들어감
    this.emoji = emoji;

    //method (arrow 사용)
    // this.display = function () { console.log(this.emoji); }
    this.display = () => { console.log(this.emoji); }
}

//생성자함수 new !!
let apple = new Fruits("apple", "red", "🍎"); //new Fruits- new라는 키워드는 heap에 값이 들어가서 생성자 함수에 주소가 들어간다
let orange = new Fruits("orange", "coral", "🍊"); 
console.log(apple);
console.log(orange);





// //apple : property - name, color : method - display()
// const apple = {
//     name: "apple",
//     color: "red",
//     display: function () {console.log("🍎");}

// }


// //orange : property - name, color : method - display()
// const orange = {
//     name: "orange",
//     color: "coral",
//     display: function () { console.log("🍊");
//     }
// }


// //lemon : property - name, color : method - display()
// const lemon = {
//     name: "lemon",
//     color: "yellow",
//     display: function () { console.log("🍋");
//     }
// }