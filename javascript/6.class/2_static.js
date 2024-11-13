//static 메소드 : 객체를 생성하지 않고, 클래스명. 메소드 형식으로 호출이 가능함!!
class Fruit {
    static MAX_SIZE = 100;

    constructor(name, color, emoji) {
        this.name = name;
        this.color = color;
        this.emoji = emoji;
    }

    // static makeFruit = () => {console.log('makeFruits 호출완료!!');
    // }
    static getMaxSize = () => this.MAX_SIZE;
    static makeFruit = () => {
        console.log('orange', 'coral', '🍊');
    }

    display = () => console.log(`${this.name}, ${this.color}, ${this.emoji}`);
    //display메소드는 객체가 생성되지 않으면 호출이 불가능함
}

let apple = new Fruit('apple', 'red', '🍎');
apple.display();
// Fruits.makeFruit(); //저장공간이각자다름  //static이 붙은 메소드들은 따로 저장됨 클래스가 붙은 static 메소드 호출
let orange = Fruit.makeFruit(); //주소값이 orange에 들어감 
console.log(orange);
// orange.display();
console.log(Fruit.getMaxSize());

