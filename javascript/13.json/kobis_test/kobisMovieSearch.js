import {kobisMovieList, kobisMovieDetail} from './kobisCommons.js';

let mlist = null;

InitForm();


/**영화리스트 100개 준비 */
function createMoviesList() {
    //KOBIS 영화리스트 가져오기
    kobisMovieList()
    .then((list) => {
        const tcount = list.movieListResult.totCnt;  // "totCnt": 107423,
        const length = list.movieListResult.movieList .length;  
        const movieList = list.movieListResult.movieList;
        console.log(`tcount --> ${tcount}`);//변수명
        console.log(`length --> ${length}`);

        mlist = movieList; //전역변수로 바꿈
        // for(let movie of mlist)
        //     console.log(movie.movieNm);
            

        //movieList에서 title 검색   
    })
    .catch((error) => console.log(error));
}





function InitForm() {
    createMoviesList();


    let output = `
        <h1>KOBIS 영화검색</h1>
        <div>
            <input type="text" id="search_title" placeholder="제목을 입력해주세요">
            <button type="button" id="search_button">Search</button>
        </div>
        <div id="result"></div>
    `;
    document.querySelector("body").innerHTML = output;


    //Search 버튼 이벤츠 추가 및 유효성 체크
    document.querySelector("#search_button") //검색버튼 부분
            .addEventListener('click', ()=> {

        let title = document.querySelector("#search_title");
        if(title.value.trim() ==='') {
            alert('영화 제목을 입력해주세요');
            title.focus();
        }else{
            //영화 리스트 출력 함수 호출
            searchMovieList(title.value.trim());
            //alert(title.value); //value값을넣어야입력한값이나옴
        }

    });
}//initForm()


/**
 * 영화 코드 검색 함수
 */
function searchMovieCd(title) {
    let movieCd = '';
    if(mlist !== null) {
        let filterMovie = mlist.filter((movie) => movie.movieNm === title);
        movieCd = filterMovie[0].movieCd;
        // console.log(`title --> ${filterMovie[0].movieNm}`);
        // console.log(`code ---> ${filterMovie[0].movieCd}`);

        movieCd = filterMovie[0].movieCd;       
    }

        return movieCd;
    
        
}





/**
 * 영화 상세 검색 함수
 */

function searchMovieList(title){
    let movieCd = searchMovieCd(title);
    console.log(`code ==>> ${movieCd}`);

    kobisMovieDetail(movieCd)
    .then((result) => { 
        console.log(result);
    let info = result.movieInfoResult.movieInfo;


    let output =`
    <ul>
        <li>
            <label>moviecCd</lable>
            <span>${info.movieNm}</span>
        </li>
        <li>
            <label>moviecCd</lable>
            <span>${info.movieNm}</span>
        </li>
        
    `;
    
    info.directors.forEach((director) => {
        output += `<span>${director.peopleNm}</span>`;
        output += `<span>${director.peopleNmEn}</span>`;
    });
    
    output += `<li>
        <label>actors :: </label>;
        <ul>
            `;
            
    //출연배우 출력
    info.actors.forEach((actor) => {
        output += `<li><span>${actor.peopleNm} | </span>`
        output += `<span> ${actor.peopleNmEn} | </span>`
    });

    
    output += `

    </ul>
            </li>
        </ul>
    `;
    
    document.querySelector("#result").innerHTML = output;

        
            // let info = result. movieInfoResult, movieInfo;
            // console.log(result.movieInfoResult.movieInfo,movieNmEn);
            
    })

} //searchMovieList



