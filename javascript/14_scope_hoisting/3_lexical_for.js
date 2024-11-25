

// 1~5 출력  //loop가 돌아갈때마다 환경 레코드가 하나씩 추가됨(5개)
for(let i=1; i<6; i++){
    console.log(`i--> ${i}`);
    
}
/** for 루프의 인덱스값으로 var키워드는 권장하지 않음 */
let a = [1,2,3]; 
for(var i=0; i<a.length; i++) { //var는 변수를 중복으로 사용가능하고 변수가 바뀔수도 있으니 사용안됨
    console.log(`a[${i}] --> ${a[i]}`);
    
}
console.log(`a[${i}] --> ${a[0]}`);
console.log(`a[${i}] --> ${a[1]}`);
console.log(`a[${i}] --> ${a[2]}`);

// a[3] --> 1
// a[3] --> 2
// a[3] --> 3



/** for...of */
for(let element of a) {
    console.log(element);    
}


