const os = require('os');  //require 내장객체는 Nodejs에서 제공하는 내장 모듈을 호출; import 동일

console.log(os.type()); //운영체제 종류를 보여줌
console.log(os.release()); //운영체제의 버전을 보여줌
console.log(os.hostname()); //컴퓨터의 이름을 보여줌
console.log(os.cpus().length);  //12 cpu갯수 출력 ,컴퓨터의 코어
console.log(os.freemem());   //사용가능한 메모리를 보여줌
console.log(os.totalmem());  //전체 메모리 용량을 보여줌

