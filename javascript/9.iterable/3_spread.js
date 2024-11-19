// ...(Spread Operator, **전개구문)
// 모든 Iterable object에서 사용 가능
// function 함수명(...param) param []
// [ ...iterable ]
// { ... iterable }


// 1.function 함수명(...param)
function add(...numbres) {//...numbres[파라미터...] <--배열에는 for..of, foreach 사용,
    let sum = 0;
    for(number of numbres) sum += parseInt(number); //number가 0이아닌경우만 더하기한다
    return sum;
}

let sum = add(1,2,3,4,5, '6');
console.log(`sum = ${sum}`);

// 2. [...iterable]
let fruit1 = ['🍏','🍋'];
let fruit2 = ['🍓','🍊','🍉'];

// fruit1과 fruit2 사이에 '🍍' 추가
let fruit3 = fruit1.concat('🍍', fruit2);
let fruit4 = [...fruit1, '🍍', ...fruit2]; //전부갖고옴

console.log(`fruit3 = ${fruit3}`);
console.log(`fruit4 = ${fruit4}`);



// 3. { ...iterable }
const hone = {
    name: "홍길동",
    age: 20,
    address: "서울시 강남구"
};

const hongUpdate = {
    ...hong,
    job: "개발자"
};

console.log(hongUpdate);


