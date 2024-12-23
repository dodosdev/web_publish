import { kobisBoxOffice, searchMoviePoster } from "./kobisCommons.js";






createMovieChartList(1); //차트 1페이지부터 시작

/**
 * index -> 무비차트 리스트 생성 함수
 */

function createMovieChartList(page) {
    const date = new Date();
    // const year = date.getFullYear();
    // const month = date.getMonth()+1;
    // const day = date.getDate()-1;

    const searchDt = date.getFullYear().toString()
                        .concat(date.getMonth()+1, date.getDate()-1);
                        console.log(searchDt);
                        
    //concat은 string일때사용
    kobisBoxOffice('Daily', searchDt)
        .then((result) => {
            // console.log(result);
            const rankList = result.boxOfficeResult.dailyBoxOfficeList;
            let posterList = [];  //Promoise 객체타입 10개의 이미지 poster저장

            rankList.forEach((element) => {
                // console.log(element.movieNm, element.openDt.replaceAll('-', '')); //replaceAll-문자지우기
                posterList.push(searchMoviePoster(element.movieNm, element.openDt.replaceAll('-', '')));
            }); //searchMoviePoster -비동기함수


            Promise.all(posterList) //비동기식 처리를 묶어서 한번에 실행 및 관리
            .then((poster) => {
                let output = '<ul>';

                (page === 2)? output += `<li><span class="movie-chart" id="arrow-left">&lt;&lt;</span></li>`
                                : output += '';
                 //(page === 2) 2페이지일때
                
                let idx = 0;
                (page !== 1) ? idx +=5 : idx =0 ;  //idx +=5 번부터시작

                // output += `<li><span id="arrow-left">&#60;&#60;</span></li>`;

                rankList.forEach((movie, i) => {
                    i += idx;
                    if(i < page * 5) {  //포스터5개나열
                        
                        output += `
                        <li>
                        <div>
                        <img src="${poster[i]}" alt="Movie-chart1" width="200px">
                        </div>
                        <div><h3>${rankList[i].movieNm}</h3></div>
                        <div><h5>${rankList[i].audiAcc}</h5></div>
                        </li>
                        `;
                        
                    } //무비차트5개까지만나열    
                });
                

                (page === 1)? output += `<li><span class="movie-chart" id="arrow-right">&gt;&gt;</span></li>`
                                : output += '</ul>';

                output += `</ul>`;  //output += ``; 닫기
                document.querySelector(".content-moviechart-list").innerHTML = output;




                // arrow-right :: click event
                const arrows = document.querySelectorAll("movie-chart"); //class로 묶고 id로 처리
                arrows.forEach((arrow) => {
                    arrow.addEventListener('click', (event) => {  //(event)<--에러체크필요없음
                        (event.target.id === 'arrow-right')? 
                        createMovieChartList(2) : createMovieChartList(1)
                        
                    });
                });



                /*
                try {
                document.querySelector("#arrow-right")
                        .addEventListener('click', ()=> {
                            // alert('1111');
                            createMovieChartList(2);
                        });

                    } catch (error) {                       
                    }

                    //

                try {
                        //arrow-left :: click event
                    document.querySelector("#arrow-left")
                    .addEventListener('click', ()=> {
                        // alert('1111');
                        createMovieChartList(1); //1페이지이동
                    });

                } catch (error) {
                }
                */

            
            }) 
        
            .catch((error) => console.log(error));
            
        
            

            
            
        })

        .catch();

    // kobisBoxOffice( 'Daily', '20241127');
}//createMovieChartList
/**
 * kobisCommons.js 파일의
 * searchMoviePoster 비동기식 함수를 순서대로 호출하는 getPoster 함수생성 */
async function getPoster(movieNm, openDt) {
    return await searchMoviePoster(movieNm, openDt);  // 비동기식getPoster로 await를 사용해 순서를지켜서 출력
}




