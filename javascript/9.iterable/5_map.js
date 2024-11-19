// key, value를 한쌍으로 가지는 클래스
// set(key, value) : 데이터 추가
// has(key) : 데이터 출력
// get(key) : 데이터 존재 여부 확인 true, false
// delete(key) : 데이터 삭제
// Map은 iterable object 이므로 for...of, spread, destructure 가능함
// Map은 배열의 각 요소를 변환하는 것을 목적으로 사용 ex)[a, b, c, d].map(소문자 → 대문자) 👉 [A, B, C, D]


let fruitMap = new Map();

fruitMap.set('apple', '🍎');
fruitMap.set('apple', '🍎'); //apple은 하나만 저장됨!
fruitMap.set('orange', '🍊');

console.log(fruitMap.get('apple'));
console.log(fruitMap.get('orange'));

console.log(fruitMap.has('orange'));
console.log(fruitMap.has('lemon'));

if(fruitMap.has('orange'))
    fruitMap.delete('orange');

console.log(fruitMap);

/**
사용자 객체 배열에서 사용자 이름만 추출하여 새로운 배열을 생성

const users = [
    {id: 1, name: "Alice"},
    {id: 2, name: "Bob"},
    {id: 3, name: "Charlie"}
];

const names = users.map(function(user) {
    return user.name;
});

console.log(names);
// 출력: ['Alice', 'Bob', 'Charlie']

 */

