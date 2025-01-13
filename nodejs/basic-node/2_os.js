const os = require('os');  //require 내장객체는 Nodejs에서 제공하는 내장 모듈을 호출; import 동일

console.log(os.type());
console.log(os.hostname());
console.log(os.hostname());
console.log(os.cpus().length);  //12 cpu갯수 출력 ,컴퓨터의 코어
console.log(os.freemem());   
console.log(os.totalmem());  //전체 메모리

