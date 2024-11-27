import { kobisBoxOffice as boxOffice, searchMoviePoster, kmdbMovieDetail  
} from './kobisCommons.js';



initForm();

function initForm() {
    const output = `
        <h1>KOBIS 박스 오피스</h1>
        <div id="search">
            <select id="type">
                <option value="default">선택</option>
                <option value="Daily">일별</option>
                <option value="Weekly">주간/주말</option>
            </select>
            <input type="text" id="searchDt" placeholder="20241121">
            <button type="button" id="searchBtn">Search</button>
        </div>
        <div id="result"></div>

        <div id="imageModal" class="modal">
            <div class="modal-content">
                <span id="closeModal" class="close" > &times; </span>
                <!--<img id="modalImage" src="" alt="Modal Image" style="width:50%"/>-->
                <div id="result"></div>
            </div>

        </div>
    `;

    document.querySelector("body").innerHTML = output;
    
    


    //기본 박스오피스 화면 출력 : 20241121
    searchBoxOffice('Daily', '20241121');



    /** Search 버튼 이벤트 추가 */
    let searchButton =  document.querySelector("#searchBtn");
    searchButton.addEventListener('click', ()=>{
        //searchDt 입력창의 유효성 체크
        //비어있을때 메세지
        let type = document.querySelector("#type"); //일별간주말 선택리스트
        let searchDt = document.querySelector('#searchDt'); //날짜입력
        // alert(type.value + searchDt.value);

        if(type.value === 'default') {
            alert('박스일자를 입력해주세요'); 
            type.focus(); 
        }else if(searchDt.value === '') {
            alert('검색일자를 입력해주세요'); 
            searchDt.focus();   //비어있는 상태에서 search 버튼을 누르면 자동으로 input박스에 커서가들어감!  
        }else{ 
            searchBoxOffice(type.value, searchDt.value);  
        }
    });

    }//end of initForm
    





    /**
     * 일별 박스오피스 정보 화면 출력
     */
    function searchBoxOffice(ktype, searchDt) {  //기간선택, 날짜박스
        boxOffice(ktype, searchDt)  // Promise 객체로 리턴
            .then((result) => {

                console.log(result.boxOfficeResult.boxofficeType);
                let rankList = null;
                let posertList = [];


                const type = result.boxOfficeResult.boxofficeType;
                const range = result.boxOfficeResult.showRange;

                if(ktype ==='Daily'){
                    rankList = result.boxOfficeResult.dailyBoxOfficeList;
                }else if(ktype === 'Weekly'){
                    rankList = result.boxOfficeResult.weeklyBoxOfficeList;
                }





                // 영화 포스터 가져오기- 20241127
                rankList.forEach((element) => {
                        let movieNm = element.movieNm;
                        let openDt = element.openDt.replaceAll('-','');
                    console.log(element.movieNm, element.openDt.replaceAll('-',''));
                    console.log(element.rank);
                    
                    posertList.push(getPoster(movieNm, openDt)); //await를 넣지않으면순서를보장하지않음
                });
                
                Promise.all(posertList) //비동기식 처리는 모두 종료가 되도록 실행  //posertList 포스터10개 출력
                .then((poster) => {



                        let output = `
                            <h5>박스오피스 타입 : ${type}</h5>
                            <h5>박스오피스 일자 : ${range}</h5>
                            <table border=1>
                                <tr>
                                    <th>순위</th>
                                    <th>제목</th>
                                    <th>개봉일</th>
                                    <th>당일관객수</th>
                                    <th>누적관객수</th>
                                </tr>`;

                            rankList.forEach((element, i) => {
                                output += `

                                <tr>
                                    <td>${element.rank}</td>
                                    <td><img src ="${poster[i]}" width="100px" class="poster" 
                                    id="${element.movieNm}, ${element.openDt.replaceAll('-','')}"> 
                                    ${element.movieNm}</td>
                                    <td>${element.openDt}</td>
                                    <td>${element.audiCnt}</td>
                                    <td>${element.audiAcc }</td>
                                </tr>
                                

                            `;
                        });
                    
                    
                        output += `</table>`;
                        // console.log();
                        

                    //테이블 화면 출력
                    document.querySelector("#result").innerHTML = output; 
                    //output 출력 //Document.querySelector()는 제공한 선택자 또는 선택자 뭉치와 일치하는 문서 내첫번째 Element를 반환함



                    //이미지클릭 이벤트
                    const images = document.querySelectorAll(".poster");
                    images.forEach((image) => image.addEventListener('click', onMovieDetail)); //onMovieDetail <--이벤트정보를 가져옴

                    // // 이미지 클릭 이벤트 (모달띄우기)
                    // let a = document.getElementsByClassName("a");
                    // a.forEach((element) => {
                    //     element.addEventListener('click', function(){
                    //         alert("이미지 클릭");

                    //     });
                    // });


                

                }).catch(); //Promise.all()

            }) 
            .catch(); //
            
        }
        /** 이미지 이벤트 처리 함수 */ 
    

        // 모달 상세화면 - 241127
        kmdbMovieDetail(movieNm, openDt)
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
                    if(i<5)actorFive.push(actor.actorNm); //if(i<5) 기본값으로 배우이름4명나옴
                });
                actors.forEach((actor) => {
                    actorAll.push(actor.actorNm); 
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
                        <div class="container-stills">
                
                `;


                
                stillArray.forEach((still) => {
                    output += `<img src= "${still}">`;
                });

                output += `</div>`;

                }else {
                    output += `<h5>검색하신 데이터가 존재하지 않습니다.</h5>`; //검색한 결과가 없을경우 출력
                } 
                document.querySelector("#result").innerHTML = output;


                /** more_actors 더보기 버튼 이벤트*/
                document.querySelector("#more_actors")
                .addEventListener('click', ()=>{
                    document.querySelector("#actors").textContent = actorAll.join();
                    document.querySelector("#more_actors").style.display = "none";  //더보기가려짐
                    document.querySelector("#close_actors").style.display = "inline-block";

                });

                /** close_actors 접기 버튼 이벤트 */
                document.querySelector("#close_actors")
                .addEventListener('click', ()=>{
                    document.querySelector("#actors").textContent = actorFive.join();
                    document.querySelector("#more_actors").style.display = "inline-block"; //더보기보여짐
                    document.querySelector("#close_actors").style.display = "none";
                });



        })

        .catch((error) => console.log(error)); //실패시

        //모달상세화면 end






            /**순차적으로 비동기식 호출을위해 getPoster 호출 */
            async function getPoster(movieNm, openDt){
                return await searchMoviePoster(movieNm, openDt);
    
}
