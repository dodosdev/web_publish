import {kmdb} from './commons.js';

initForm();  //화면출력 (호이스팅때문에상단위치)

function initForm() { //호이스팅 방식

    let output = `
        <h1>KMDB API </h1>
        <div>
            <select id="type">
                <option value="default">선택</option>
                <option value="director">영화감독</option>
                <option value="actor">영화배우</option>
            </select>
            <input type="text" id="type_value" placeholder="감독/배우">
            <input type="text" id="title" placeholder="영화 제목을 입력해주세요">
            <button type="button" id="search">Search</button>
        </div>
        <div id="result"></div>
    
    `;

    document.querySelector("body").innerHTML = output; //화면출력

    //버튼 이벤트 추가
    document.querySelector("#search") //객체
            .addEventListener('click', ()=>{
    
            //validation check(유효성 체크 / 폼체크)
            let type = document.querySelector("#type");
            let typeValue = document.querySelector("#type_value");
            let title = document.querySelector("#title");

            if(type.value =='default') {
                alert('타입을 선택해주세요');
                type.focus();
            }else if (typeValue.value === "") {
                alert('감독/배우 선택해주세요');
                typeValue.focus();
            }else if(title.value === "") {
                alert('영화제목 선택해주세요');
                title.focus();
            }else{
                searchMovieResult(type.value, typeValue.value, title.value); //KMDB API 연동 후 출력화면
            }
    });
}//initForm


//KMDB API 연동 후 출력화면
function searchMovieResult(type, value, title) {
    // console.log(type, value, title);
    kmdb(type, value, title)
        .then((result) => {
            let count = result.TotalCount;

            let output = ``;

            //데이터가 있을때 없을때 
            if(count) {
                let info = result.Data[0].Result[0];
                let directors = result.Data[0]. Result[0].directors.director; //영화배우 데이터 불러오기
                let actors = result.Data[0].Result[0].actors.actor;

                console.log(`title --> ${info.title}` );
                console.log(`title --> ${info.titleEng}` );
                console.log(`directorNm --> ${directors[0].directorNm}` ); //영화배우 데이터출력
                console.log(`directorEnNm --> ${directors[0].directorEnNm}` );
                console.log(`actors length --> ${actors.length}` );
                actors.forEach((actor, i) => {
                    if(i , 10) {
                        console.log(`actor${i} --> ${actor.actorNm}`);
                        console.log(`actor${i} --> ${actor.actorEnNm}`);
                        
                    }
                });


                
                // alert("데이터 존재");
                }else {
                    output += `<h5>검색하신 데이터가 존재하지 않습니다.</h5>`; //검색한 결과가 없을경우 출력
                } 
                document.querySelector("#result").innerHTML = output;

        })

        .catch((error) => console.log(error));
    
}