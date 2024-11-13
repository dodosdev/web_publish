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

    setEmpno = (empno) => this.#empno = empno;  //프로퍼티에 값을 할당할때,값이 변경될때 실행
    setEname = (ename) => this.ename = ename;
    setDept = (dept) => this.dept = dept;
    
    getEmpno = () => this.#empno;  //프로퍼티를 읽으려고할때 실행
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
