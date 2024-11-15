//학사관리 프로르램을 생성하는 경우, 사용자를 정의하는 클래스를 설계
//학생, 교수, 학부모, 직원 ==> Member 부모클래스 (name, age, address)
class Member {
    #name;
    #age;
    #address; //#프라이빗으로 만들어져 접급이 안됨 데이터는 내부에서 줘야함
    constructor(name, age, address) { //자식의 클래스 생성자함수에서 super 호출(공통으로들어가는 내용)
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
    constructor(sno, name, age, address){ //각각의 들어갈 정보모두 입력
        super(name, age, address); //super부분은 동일하게 들어가는 정보를입력(name, age, address)
        this.#sno = sno;
    }
    get sno(){ return this.#sno; }  //새로추가되는 정보입력 get sno(){ return this.#sno; } 
    //전체 값을 반환하는 함수 정의

    //객체명.values()
    //values = () => [this.name, this.age, this.address, this.#sno]; //#name불가
    
    //객체명.values
    get values() { //get->return하는값
        return [this.name, this.age, this.address, this.#sno];
    }
}

/**Professor class */
class Professor extends Member {
    #subject; //강의 목록
    constructor(name, age, address, subject){
        super(name, age, address);
        this.#subject = subject;
    
    }
    get subject() {return this.#subject;}
        //객체명.values
    get values() { //get->return하는값
        return [this.name, this.age, this.address, this.#subject];

    }
}

/**Parent class */
class Parent extends Member{
    #cname; // 자녀명
    constructor(name, age, address, cname){
        super(name, age, address);
        this.#cname = subject;
    }
    get cname() {return this.#cname;}
    get values() { //get->return하는값
        return [this.name, this.age, this.address, this.#cname];

    }
}


/**Employee class */
class Employee extends Member{
    #department; // 소속부서
    constructor(name, age, address, department){
        super(name, age, address);
        this.#department = department;
    }
    get department() {return this.#department;}
    get values() { //get->return하는값
        return [this.name, this.age, this.address, this.#department];

    }
}


//signup 버튼 클릭시 호툴되는 함수
const signupCheck = () => {
    let type = document.querySelector("input[type=radio]:checked");
    let name, age, address, sno, subject, cname, department;

    // let sno = document.querySelector("#sno");
    // let name = document.querySelector("#name");
    // let age = document.querySelector("#age");
    // let address = document.querySelector("#address");
    // let cname = document.querySelector("##cname");
    // let department = document.querySelector("#department");
    
    // alert(type.value);


    let member = null;   //type에 따라서 각각의 클래스 생성
    switch(type.value) {
        // 학생
        case '1' : 
            name = document.querySelector("#student #name");
            age = document.querySelector("#student #age");
            address = document.querySelector("#student #address");
            sno = document.querySelector("#student #sno"); //새로추가

            member = new Student(sno.value,  //value값이 입력한 목록을 보여줌
                                name.value, 
                                age.value,
                                address.value); 
            break; //case 1번이면 학생
        // ㅣ교수
        case '2' :
            name = document.querySelector("#professor #name");
            age = document.querySelector("#professor #age");
            address = document.querySelector("#professor #address");
            subject = document.querySelector("#professor #subject");

            member = new Professor(name.value, 
                                    age.value,
                                    address.value, 
                                    subject.value); 
            break;
        // 학부모
        case '3' :
            name = document.querySelector("#parent #name");
            age = document.querySelector("#parent #age");
            address = document.querySelector("#parent #address");
            cname = document.querySelector("#parent #cname");

            member = new Parent(name.value,  
                                age.value,
                                address.value, 
                                cname.value);  
            break;
        //직원 
        case '4' :
            name = document.querySelector("#employee #name");
            age = document.querySelector("#employee #age");
            address = document.querySelector("#employee #address");
            department = document.querySelector("#employee #department");

            member = new Employee(name.value, 
                                age.value,
                                address.value,
                                department.value);  
            break;

        default :
    }
    console.log(member.values); //input에 입력한정보가 console창에출력되게...

    

    //자바스크립트로 생성되는 HTML를 Dynamic HTML(DHTML)
    // let list = Object.keys(member); //member를 나열해서 list로 넣는다
    //['name', 'age', 'address', 'sno' ]
    //class의 필드값이 private

    let list = '';
    member.values.forEach((item)=> {
        list += `<li>${item}</li>`;
    });

    // [1,2,3,4]
    
    let output = `<ul>${list}</ul>`;
    
    document.querySelector("#result").innerHTML = output; 
} //end of signupCheck




//display : 라디오버튼 선택시 화면을 전환시키는 함수
const display = (type) => {
    document.querySelector("#result").innerHTML = ""; //메뉴전환시내용이사라짐

    document.querySelector('#student').style.display = "none";
    document.querySelector('#professor').style.display = "none";
    document.querySelector('#parent').style.display = "none";
    document.querySelector('#employee').style.display = "none";
    //type=1 학생폼
    if(type === '1'){
        document.querySelector('#student').style.display = "block";//보여지는부분만block
        // document.querySelector('#professor').style.display = "none";
        // document.querySelector('#parent').style.display = "none";
        // document.querySelector('#employee').style.display = "none";
    } else if(type === '2'){
        // document.querySelector('#student').style.display = "none";
        document.querySelector('#professor').style.display = "block";
        // document.querySelector('#parent').style.display = "none";
        // document.querySelector('#employee').style.display = "none";
    }else if(type === '3'){
        // document.querySelector('#student').style.display = "none";
        // document.querySelector('#professor').style.display = "none";
        document.querySelector('#parent').style.display = "block";
        // document.querySelector('#employee').style.display = "none";
    }else if(type === '4'){
        // document.querySelector('#student').style.display = "none";
        // document.querySelector('#professor').style.display = "none";
        // document.querySelector('#parent').style.display = "none";
        document.querySelector('#employee').style.display = "block";
    }//if
}//end of display




/* 
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

Array.prototype.forEach()

const array1 = ['a', 'b', 'c'];
array1.forEach((element) => console.log(element));
// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

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




