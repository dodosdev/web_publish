//class의 field는 생성자함수에서 정의하는 값
//field에 접근 제어를 정의 : private(#), public
class Fruit {
    //constructor
    constructor(name, color, emoji){  // constructor외부에서접근
        //Fields
        this.name = name;
        this.color = color;
        this.emoji = emoji;
    }
    display = () => console.log(`${this.name}, ${this.color}, ${this.emoji}`);//console.log 내부접근   
}

const apple = new Fruit('apple', 'green', '🍏');
apple.display();
console.log(apple.name);
console.log(apple.color);
console.log(apple.emoji);
