import { kobisBoxOffice, searchMoviePoster } from "./kobisCommons.js";


createMovieChartList();

/**
 * index -> 무비차트 리스트 생성 함수
 */

function createMovieChartList() {
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
                rankList.forEach((movie, i) => {


                    output += `
                        <li>
                            <div>
                                <img src="${poster[i]}" alt="Movie-chart1" width="200px">
                            </div>
                            <div><h3>${movie.movieNm}</h3></div>
                            <div><h5>${movie.audiAcc}</h5></div>
                        </li>
                    
                    `;


                });
                output += `</ul>`;  //output += ``; 닫기
                
                document.querySelector(".content-moviechart-list").innerHTML = output;
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