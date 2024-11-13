const person = {
    name: "홍길동",
    age: 20,
    job: "개발자"
}

const fruits = {
    name: "메론",
    emoji: "🍈"
}

console.clear();
// console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person.job);



// person 객체를 CRUD로 관리하는 함수를 정의
// C(Create), R(Read). U(Update), D(Delete)
// setValue(생성),  getValue()->(값을 꺼내다), undateValue(), deleteValue()


//화살표함수 표현식 //react에서 사용
//const 함수명 = (파라미터..) =>{실행문; }

const setValue = (object, newkey, value) => {object[newkey] = value;}
const getValue = (object, key) => object[key];

const UpdateValue = (object, key, newvalue) => object[key] = newvalue;
// function UpdateValue(object, key, newvalue){
//     object[key] = newvalue;
// }  -->const로 변경


const deleteValue = (object, key) => delete object[key];
// function deleteValue(object, key){
//     delete object[key];
// }


//set은 새로운 값으로 바꿔줄때/ 추가할때
setValue(person, "address", "서울시" );
setValue(fruits, "color", "red");
       // Object, "key",  "value"
console.log(person);
console.log(fruits);

console.log(getValue(person, "name"));
console.log(getValue(fruits, "color"));

UpdateValue(person, "name", "김철수");
UpdateValue(fruits, "color", "Green");
console.log(person);
console.log(fruits);

deleteValue(person, "age");
deleteValue(fruits, "name");
console.log(person);
console.log(fruits);



