//1. Hello Javascript '문자열을 한 문자씩 출력해주세요
let str = 'Hello~~ Javascript!!';
for(let i=0; i<str.length; i++){
    console.log(str[i]); 
}

//2. '독서, 수영, 영화, 게임, 사이클'
let hobbys = '독서, 수영, 영화, 게임, 사이클';
hobbys = hobbys.split(',');
console.log(hobbys);
for(let i=0; i<hobbys.length; i++){
    console.log(hobbys[i].trim()); //.trim() 문자열 양끝의 공백을제거 String.prototype.trimEnd()<--마지막부분 trimStart()<--마지막부분
}

hobbys.forEach((hobby) => console.log(hobby.trim()));
// 독서
// 수영
// 영화
// 게임
// 사이클
// 독서
// 수영
// 영화
// 게임
// 사이클