//readme.txt 파일을 읽어서 내용을 화면에 출력하는 실습
const fs = require('fs');
const fsp = require('fs').promises
//const { text } = require('stream/consumers');

///console.log(fs);
// fs.readFile('파일의 경로', 파일을 읽은 후 실행 함수 :: 콜백함수);//readme에서 실행된함수 -콜백함수
//fs.readFile('파일의 경로', function() => () {});
fs.readFile('./readme.txt', (err, text) => {  
    if(err) { 
        console.log('파일 읽기 실패!'); //에러날경우 메세지 에러가없으면 else로 실행
    } else {  
        console.log(text);     //문자를 16진수로 출력 --> 버퍼 - 임시공간에 담아둠
        console.log(text.toString()); 
        //"toString"메서드는 객체가 가지고 있는 정보나 값들을 문자열로 만들어 리턴함
    }
});


//프로미스 타입으로 리턴
fsp.readFile('./readme.txt')
            .then((data)=>{
                console.log('fsp-->', data.toString());
            })
            .catch((err)=>{
                console.log(err);
                
            });

//<Buffer ed 85 8c ec 8a a4 ed 8a b8 20 ed 8c 8c ec 9d bc ec 9e 85 eb 8b 88 eb 8b a4 2e> 테스트 파일입니다.

