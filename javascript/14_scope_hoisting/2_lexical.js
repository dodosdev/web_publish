// Lexical(렉시컬) - 실행 컨텍스트안에 포함된 객념으로 스코프별로 메모리를 효율성
// 렉시컬 스코프(정적스코프) : 자바스크립트는 렉시컬스코프를 따르기때문에 함수는 태어나자마자 상위 스코프가 결정이 되고 이후에 함수객체가 생성이 되면 해당함수객체는 본인의 상위 스코프를 항상 알 수 있게 된다

//있게 관리하는 영역, 변수선언, 실행코드, 외부호출 코드
// 콜스텍(Call Stack) - 호출되는 코드(함수)를 순차적으로 실행
// 전역 Scope : 변수, 실행코드 외부연결
// Scope channing 스코프 체이닝 - 레코드 정보들을 연결
// 저장이되는 환경 : Lexical Environment
// 실행텍스트 : Variable Environment , Laxcal, Eval function
// V8은 싱글 쓰레드 형식 : 인터프리터 Call stack(일을 담당) 
// 실행 => 실행컨텍스트  :  Lexical Environment(저장환경)
// 바인딩(binding): 식별자(이름)과 값을 연결하는 것
// Lexical Environment 레시컬 환경은 다시 만들어짐

// Environment Record(환경 레코드) ==> 환경 레코드는 코드의 중첩 구조를 기반으로 식별자들을 특정 변수 또는 함수에 연결하기 위해 사용된다.주로 함수 선언문, 블록, try문의 catch절과 같은 구문이 평가될 때마다 해당 코드에 의해 생성된 식별자 바인딩을 기록하기 위해 환경 레코드가 생성된다.

//변수의 선언시 let, const를 활용하여 정확한 스코프 범위 설정 중요!!!




{
    let a = 10;
    console.log(`a --> ${a}`);
    console.log(`aa --> ${aa}`); //?
    {
        let b = 20;
        var aa = 100;  //var는 전역으로 선언됨
        console.log(`b --> ${b}`);
        console.log(`aa --> ${aa}`);

        {
            let c = 30;
            console.log(`c --> ${c}`);
            console.log(`a --> ${a}`); //전역변수(어디서든결과나옴)
            console.log(`b --> ${b}`);     
        }//level 3
    }// level 2
}// level 1



