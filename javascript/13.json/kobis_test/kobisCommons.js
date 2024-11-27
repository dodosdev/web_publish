
    export async function kobisMovieList(){
        const key = `e0a980916aa2f83b657475b56aa5203f`;
        const curPage = 1;
        const itemPerPage = 100;
        const url = `https://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=${key}&curPage${curPage}&itemPerPage=${itemPerPage}`;   //파라미터 연결
        console.log(url);

        const movieList = await fetch(url);//fetch 문자로 가져옴
        const jsonData = await movieList.json();

        return jsonData;
    }




/** KOBIS 영화 정보 호출 함수 */

export async function kobisMovieDetail(movieCd) {
    const key = `e0a980916aa2f83b657475b56aa5203f`;
    const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=${key}&movieCd=${movieCd}`; 
    console.log(url);
    
    const movie = await fetch(url);
    const jsonData = await movie.json();
    
    return jsonData;

}
    






/** KOBIS 박스오피스 정보 호출 함수 */

export async function kobisBoxOffice(type, searchDt) {
    alert(type + searchDt)
    const key = `1387ed83604df30a0c5d9dfdea0cba00`;
    // const key = `e0a980916aa2f83b657475b56aa5203f`;
    const url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/search${type}BoxOfficeList.json?key=${key}&targetDt=${searchDt}`; 
    console.log(url);
    
    const kobis = await fetch(url);
    const jsonData = await kobis.json();
    
    return jsonData;

}

