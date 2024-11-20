// text 배열을 입력받아, 길이가 3자 이상인 text들을 새로운 배열 객체로 생성하여 반환해주세요.

const textFilter = (object) => {
    // return object.filter((text) => text.length >= 3); 
    return object.filter((text) => text.length  >=3 ); // 조건에 만족하면 [배열] 배열 리턴!
    // ['nodeJS', 'javascript']
    // return result;
}
function textFilter2(object) {
    return object.filter((text) => text.length >=3 );
}

// function textFilter2() {}

let textArray = ['nodeJS', 'javascript', 're', 'ja'];
let result = textFilter(textArray);
console.log(result);

// 2. 숫자 배열을 입력받아, 짝수, 홀수 필터링하여 출력하는 함수를 생성해주세요.
// 출력되는 값들은 배열 객체에 담아 반환해주세요.
const evenNumber = (array) => {
    return array.filter((number) => !(number % 2));  //0 <-- false값은 버림  0의 반대 ! 1홀수//false일때는버리고 true일때는 넘김
}
const oddNumber = (array) => {
    return array.filter((number) => number % 2);
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(evenNumber(numbers));
console.log(oddNumber(numbers));

// 3. 사원의 아이디를 받아서, 7자리 번호를 랜덤하게 생성하여 아이디와 번호를 
//조합하여 사번을 생성해주세요
//사원의 아이디는 배열객체로 입력받고, 출력도 배열형태로 출력해주세요.

const createEmployeeNumber = (array) => {
    //중복된 데이터 처리
    let array2 = new Set(array);
    // console.log(Array.from(array2));

    return Array.from(array2).map((id) => 
        id.concat('_', Math.trunc(Math.random() * 100000000)));

}


// const createEmployeeNumber = (array) => {
//     return array.map((id) => { //map에서 return
//         //번호 생성
//         let number = (Math.random() * 10000000);
//         return id.concat('_',number); //hong_1234567
//     }); //['hong_1234567', ...] <===return은 배열객체가 들어가게함
// }

const employeeIds = ['hong', 'test', 'abcd', 'test1234', 'hong', 'test'];
const employeeNumbers = createEmployeeNumber(employeeIds);
console.log(employeeNumbers);





