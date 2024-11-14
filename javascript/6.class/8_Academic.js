//학사관리 프로르램을 생성하는 경우, 사용자를 정의하는 클래스를 설계
//학생, 교수, 학부모, 직원 ==> Member 부모클래스 (name, age, address)
class Member {
    #name;
    #age;
    #address;
    constructor(name, age, address) { //자식의 클래스 생성자함수에서 super 호출
        this.#name = name;
        this.#age = age;
        this.#address = address;
    }

    get name(){ return this.#name;}
    get age(){ return this.#age;}
    get address(){ return this.#address;}

}

class Student extends Member{
    #sno; //학번 
    constructor(sno, name, age, address){
        super(name, age, address);
        this.#sno = sno;
    }
    get sno(){ return this.#sno; }  
}

/**Professor class */
class Professor extends Member {
    #cname; //강의 목록
    constructor(sno, name, age, address){
        super(name, age, address);
        this.#cname = cname;
    
    }
    get cname() {return this.#cname;}
}

/**Parent class */
class Parent extends Member{
    #subject; // 자녀명
    constructor(name, age, address){
        super(name, age, address);
        this.#subject = subject;
    }
    get subject() {return this.#subject;}
}


/**Employee class */
class Employee extends Member{
    #department; // 소속부서
    constructor(name, age, address){
        super(name, age, address);
        this.#department = department;
    }
    get department() {return this.#department;}
}

//signup 버튼 클릭시 호툴되는 함수
const signupCheck = () => {
    let type = document.querySelector("input[type=radio]:checked");
    let sno = document.querySelector("#sno");
    let name = document.querySelector("#name");
    let age = document.querySelector("#age");
    let address = document.querySelector("#address");
    let cname = '';
    let department = '';
    
    // alert(type.value);

    //type에 따라서 각각의 클래스 생성
    let member = null;
    switch(type.value) {
        case '1' : 
            member = new Student(sno.value,
                                name.value, 
                                age.value,
                                address.value); 
            break; //case 1번이면 학생
        case '2' : member = new Professor(name, age, address, subject);  break;
        case '3' : member = new Parent(name, age, address, subject, cname);  break;
        case '4' : member = new Employee(name, age, address, department);  break;
        default :
    }
    console.log(member);

}

//display
const display = (type) => {
    alert('111');
    //type=1 학생폼
    if(type === '1'){
        document.querySelector('#student').style.display = "block";
        document.querySelector('#professor').style.display = "none";
        document.querySelector('#parent').style.display = "none";
        document.querySelector('#employee').style.display = "none";
    } else if(type === '2'){
        document.querySelector('#student').style.display = "none";
        document.querySelector('#professor').style.display = "block";
        document.querySelector('#parent').style.display = "none";
        document.querySelector('#employee').style.display = "none";
    }else if(type === '3'){
        document.querySelector('#student').style.display = "none";
        document.querySelector('#professor').style.display = "none";
        document.querySelector('#parent').style.display = "block";
        document.querySelector('#employee').style.display = "none";
    }else if(type === '4'){
        document.querySelector('#student').style.display = "none";
        document.querySelector('#professor').style.display = "none";
        document.querySelector('#parent').style.display = "none";
        document.querySelector('#employee').style.display = "block";
    }
    
    
    
}

/*
const hong = new Student('1234', '홍길동', 20, '서울시 강남구'); //학생
const smith = new Professor('smith', 40, '서울시 강남구', 'Jvascript'); //교수
const hongP = new Parent('홍길순', 60, '부산시 해운대구', '개발1팀'); //교수

console.log(`*학생 정보*`);
console.log(`${hong.sno}\n${hong.name}\n${hong.age}\n)${hong.address}\n`);

console.log(`*교수 정보*`);
console.log(`${smith.sno}\n${smith.name}\n${smith.age}\n)${smith.address}\n${smith.subject}`);

console.log(`*학부모 정보*`);
console.log(`${hongP.sno}\n${hongP.name}\n${hongP.age}\n)${hongP.address}\n${hongP.subject}`);

console.log(`*직원 정보*`);
console.log(`${lee.sno}\n${lee.name}\n${lee.age}\n)${lee.address}\n${lee.subject}`);
*/