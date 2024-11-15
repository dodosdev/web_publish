//기본 데이터타입(Primitive DataType) - number, string, boolean...
//기본 데이터타입을 클래스로 정의한 것을 wrapper 클래스라함
//표준내장객체>number (mdn)

let a = "123";
if(typeof a === "string") a = parseInt(a);
if(a === 123) console.log(a);

if(Number("123") === 123) console.log(`a=>${a}`);  //자동으로 문자를 숫자로 변경해서 사용가능
//NUumber.MAX_VALUE 표현할수 있는 가장 최대의값


let maxValue = Number.MAX_VALUE;
let minValue = Number.MIN_VALUE;

console.log(maxValue);
console.log(minValue);

let x = 100; //x에대한 100이 y로 감
let y = new Number(100);//new->heap에서 주소 생성 --> call stack이동
console.log(typeof x);
console.log(typeof y);
console.log(x === y);  //false가 나오는 이유정리!
console.log(x === y.valueOf()); //함수뒤에()  --static스테틱


/** String class + Templeat literal(``)*/
let str ="hello~"; 
let str2 = new String("hello~");//heap에생성  
console.log(typeof str);
console.log(typeof str2);
console.log(str === str2);
console.log(str === str2.valueOf());

/** Boolean class */
let flag = true;
let flag2 = new Boolean(true);
console.log(typeof flag);
console.log(typeof flag2);
console.log(flag === flag2);
console.log(flag === flag2.valueOf());

