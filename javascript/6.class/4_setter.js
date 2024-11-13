// 클래스에서 정의되는 메소드로, #(private)로 접근제어가 설정된 필드에
// 새로운 값을 입력하기 위한 메소드이다.
// setterxxx(입력되는 값), getterxxx()
//접근자 프로퍼티: 데이터 프로퍼티의 값을 읽거나 저장할때 사용하는 접근자 함수로 구성된 프로퍼티
//접근자 함수는 getter, setter

class Employee{
    #empno;
    constructor(empno, ename, dept){
        this.#empno = empno;
        this.ename = ename;
        this.dept = dept;
    }

    setEmpno = (empno) => this.#empno = empno;  //setter는 특정한 속성에 값이 변경되어질 때마다 함수를 실행하는데 사용될 수 있다
    setEname = (ename) => this.ename = ename;
    setDept = (dept) => this.dept = dept;
    
    getEmpno = () => this.#empno;  //어떤 프로퍼티에 접근할 때마다 그 값을 계산하도록 해야 하거나, 내부 변수의 상태를 명시적인 함수 호출 없이 보여주고 싶을 때,
    getEname = () => this.ename;
    getDept = () => this.dept;

    info = () => console.log(`${this.ename}, ${this.dept}`);
    infoAll = () => console.log(`${this.#empno}, ${this.ename}, ${this.dept}`);
    
}

const hong = new Employee('1234', '홍길동', '개발1팀');
hong.info();
hong.infoAll();
hong.setEmpno('12345');
hong.setEname('홍홍');
hong.setDept('개발2팀');

hong.infoAll();
console.log(hong.getEmpno());
console.log(hong.getEname());
console.log(hong.getDept());
