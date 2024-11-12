//구구단을 출력하는 함수 생성
/**
 3 * 1 = 3    4 * 1 = 4    5 * 1 = 5
 3 * 2 = 6
 ...

 * 
 */
import {singleGugudan, selectGugudan, gugudan, fruitsTower} 
from './fmodule_arrow.js';   //현재 같은위치




singleGugudan(3);  //3단 출력
selectGugudan(7,9);  //7~9단 출력
gugudan();  //전체(1~9)출력



fruitsTower('💛', 5);
fruitsTower('🍰', 10);


// //7~9단 출력
// gugudan();
// gugudan(3);
// gugudan(7, 9);




//fruitsTower('💛', 5);

// for(let star=1; star<=5; star += 1){
//     console.log('💛'.repeat(star))
    
// }
// for(let star=5; star<=1; star -= 1){
//     console.log('💛'.repeat(star))
    
// }



//fruitsTower('🍰', 10);









