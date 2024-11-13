//class의 field는 생성자함수에서 정의하는 값
//field에 접근 제어(Access control)를 정의 : private(#), public

class Fruit {  //class는 메모리에 객체를 만드는것
    //constructor
    #name; //인스턴스.name 형식으로 외부에서 호출하는 경우 데이터 숨김
    constructor(name, color, emoji){  // constructor외부에서접근
        //Fields
        this.name = name;
        this.color = color;
        this.emoji = emoji;
    }

    display = () => console.log(`${this.name}, ${this.color}, ${this.emoji}`);//console.log 내부접근   
}

const apple = new Fruit('apple', 'green', '🍏');
//JavaScript에서 클래스의 생성자를 호출하려면, new 연산자를 사용하여 새 객체 참조를 변수에 할당함.
apple.display(); //내부에서 접근
console.log(apple.name);
console.log(apple.color);
console.log(apple.emoji);

console.clear();

// 사번(#), 사원명, 부서명
//info() 메소드 호출시 모든 정보 출력
class Employee{
    #empno  //private
    constructor(empno, ename, dept){

        this.#empno = empno;
        this.ename = ename;
        this.dept = dept;
    }

    info = () => console.log(`${this.empno}, ${this.ename}, ${this.dept}`);
    infoAll = () => console.log(`${this.#empno}, ${this.ename}, ${this.dept}`); //console.log 내부메소드
}

const hong = new Employee('1234', '홍길동', '개발1팀');
hong.info(); //일반정보 : 사원명, 부서명 출력
hong.infoAll(); //모든정보
