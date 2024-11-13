// 객체에서 기능을 실행하는 메소드
const apple = {
    name : "사과",
    color : "Red",
    emoji : "🍎", 
    display : function () {console.log("🍎"); },   //메소드 ->함수를 담당하는 자바스크립트 
    getName : function () {console.log(this.name); }, //callstack에 name이 저장되있음
    getColor : function () {console.log(this.color); },
    getEmoji : function () { console.log(this.emoji); }
    
}

console.log(apple);
apple.getName();
apple.getColor();
apple.getEmoji();
apple.display(); //함수로 이름이 정의됨
//display();