import Avatar from "./Avatar";


// props = {
//     list : [
//         {"img" : "/images/people1.webp", "name": "Smith", "age" : "20" },
//         {"img" : "/images/people2.webp", "name": "James", "age" : "30" },
//         {"img" : "/images/people3.webp", "name": "Kelly", "age" : "19" },
//     ],
//     name: "홍길동"
// }


export default function AvatarList({list}) {  //구조분해할당

    return (
        <ul>
            {list.map((object) => 
                <li><Avatar img={object.img} 
                            name={object.name} 
                            age={object.age} />
                </li>
                 //img={object.img} 배열에서 현재처리중인요소, 배열에서현재처리중인인덱스, map이호출된배열(map배열의각요소변환하기)

            )}  
        </ul>
    ); 

}

// const fruits = ["Apple", "Banana", "Cherry"];

// const lowercaseFruits = fruits.map(function(fruit) {
//     return fruit.toLowerCase(); // 문자열을 소문자로 변환
// });

// console.log(lowercaseFruits);
// 출력: ['apple', 'banana', 'cherry']


/** 매개변수
 * - arr 배열의 각 요소에 적용할 때 호출되는 콜백 함수입니다.
    이 콜백 함수는 세 개의 매개변수를 가질 수 있습니다.
    - currentValue (필수 값): 처리할 현재 요소. 이 매개변수를 통해 현재 요소에 접근할 수 있습니다.
    - index (선택 사항): 처리할 현재 요소의 인덱스. 이 매개변수를 사용하여 현재 요소의 인덱스에 접근할 수 있습니다.
    - array (선택 사항): forEach() 함수를 호출한 배열. 이 매개변수를 사용하여 원본 배열에 접근할 수 있습니다.
 */