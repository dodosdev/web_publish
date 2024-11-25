// strict mode : 엄격 모드 :: NodeJS 기반 사용
"use strict";  // NodeJS에서 키워드를 정확히 체크하기 위함

const a = 10;  // var a = 10;
console.log(`a :: ${a}`);


/**
 C:\dev\web_publish\javascript\14_scope_hoisting\5_strict.js:4
a = 10;  // var a = 10;
  ^

ReferenceError: a is not defined
 */