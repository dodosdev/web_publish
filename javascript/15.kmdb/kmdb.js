import { kmdb } from './commons.js';

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
    
            //validation check(유효성 체크 / 폼체크)  //type, type_value, title
            let type = document.querySelector("#type");
            let typeValue = document.querySelector("#type_value");
            let title = document.querySelector("#title");

            if(type.value =='default') {  //선택하지 않았을때 메세지
                alert('타입을 선택해주세요');
                type.focus();
            }else if (typeValue.value === "") {  //감독배우이름 입력하지않았을때
                alert('감독/배우 선택해주세요');
                typeValue.focus();
            }else if(title.value === "") {
                alert('영화제목 선택해주세요');  //영화제목 입력하지않았을때
                title.focus();
            }else{
                searchMovieResult(type.value, typeValue.value, title.value); //KMDB API 연동 후 출력화면
            }
    });
} //initForm


//KMDB API 연동 후 출력화면
function searchMovieResult(type, value, title) {
    // console.log(type, value, title);
    /** 검색결과 출력 Promise --> 화면 */
    kmdb(type, value, title)
        .then((result) => {      // then성공시  
            let count = result.TotalCount;
            let output = ``;
            let actorFive = [];
            let actorAll = [];

            //데이터가 있을때 없을때 
            if(count) {
                let info = result.Data[0].Result[0];
                let directors = result.Data[0]. Result[0].directors.director; //영화배우 데이터 불러오기
                let actors = result.Data[0].Result[0].actors.actor;
                let posters = result.Data[0].Result[0].posters;
                let posterArray = result.Data[0].Result[0].posters.split("|"); 
                let stillArray = result.Data[0].Result[0].stlls.split("|");
                let staffs = result.Data[0].Result[0].staffs.staff;
                let title =  info.title.replaceAll('!HS', '').replaceAll('!HE', ''); // 대체된 새 문자열을 반환
                
                actors.forEach((actor, i) => {
                    if(i<5)actorFive.push(actor.actorNm); //if(i<5) 4명까지나옴
                });
                actors.forEach((actor) => {
                    actorAll.push(actor.actorNm); //if(i<5) 4명까지나옴
                });
                // console.log(`actorFive--> ${actor.actorFive}`);
                

                output = `
                        <div class="container">
                            <div class="container-img"></div>
                            <div class="container-content">
                                <h3>${title}</h3> 
                                <h5>${info.titleEng} - ${info.prodYear}</h5>
                                <hr>
                                <p>[${info.type}] ${info.rating} ${info.nation}${info.runtime}분${info.repRlsDate}</p>
                                <p><span>제작사 ::</span><span>${info.company}</span></p>
                                <p><span>감독 ::</span><span>${staffs[0].staffNm}</span></p>
                                <p>
                                    <span>출연 ::</span><span id="actors">${actorFive.join()}</span>
                                    <button type="button" id="more_actors">더보기</button>
                                    <button type="button" id="close_actors" style="display:none">접기</button>
                                </p>
                            </div>
                            <div>
                                <img src="${posterArray[1]}" alt="">
                            </div>
                        </div>
                        <div class="container-stills>
                
                `;


                
                stillArray.forEach((still) => {
                    output += `<img src= "${still}">`;
                });

                output += `</div>`;

                

                // console.log(`posterArray --> ${posterArray.length}` );
                // console.log(`title --> ${info.title}` );
                // console.log(`title --> ${info.titleEng}` );
                // console.log(`directorNm --> ${directors[0].directorNm}`); //영화배우 데이터출력
                // console.log(`directorEnNm --> ${directors[0].directorEnNm}`);
                // console.log(`actors length --> ${actors.length}`);


                // actors.forEach((actor, i) => {
                //     if(i , 10) {
                //         console.log(`actor${i} --> ${actor.actorNm}`);
                //         console.log(`actor${i} --> ${actor.actorEnNm}`);
                        
                //     }
                // });

                // posterArray.forEach((posters) => console.log(posters) );//이미지 목록가져오기
                // stillArray.forEach((still) => console.log(still) );//이미지 목록가져오기
                // staffs.forEach((staff) => {
                //     console.log(staff.staffNm);
                //     console.log(staff.staffEnNm);
                //     console.log(staff.staffRoleGroup);
                //     console.log(staff.staffRole);
                //     console.log(staff.staffEtc);
                    
                // });


                
                // alert("데이터 존재");
                }else {
                    output += `<h5>검색하신 데이터가 존재하지 않습니다.</h5>`; //검색한 결과가 없을경우 출력
                } 
                document.querySelector("#result").innerHTML = output;




                /**추가내용은 output 아래에 작성한다 --> 
                 * document.querySelector("#result").innerHTML = output; (이미 내용이 출력됬기때문)
                 * /

                /** more_actors 더보기 버튼 이벤트*/
                document.querySelector("#more_actors")
                .addEventListener('click', ()=>{
                    document.querySelector("#actors").textContent = actorAll.join();
                    document.querySelector("#more_actors").style.display = "none";
                    document.querySelector("#close_actors").style.display = "inline-block";

                });

                /** close_actors 접기 버튼 이벤트 */
                document.querySelector("#close_actors")
                .addEventListener('click', ()=>{
                    document.querySelector("#actors").textContent = actorFive.join();
                    document.querySelector("#more_actors").style.display = "inline-block";
                    document.querySelector("#close_actors").style.display = "none";
                });



                

        })

        .catch((error) => console.log(error)); //실패시


    
}