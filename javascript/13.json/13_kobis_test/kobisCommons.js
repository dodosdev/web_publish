
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





    /* KMDB 영화 상세정보(새창띄우기) - 20241127
     * */
    export async function kmdbMovieDetail(movieNm, openDt) {
        const key = `TDSG188W34566K65X667`;
        // const key = `e0a980916aa2f83b657475b56aa5203f`;
        let url = `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/`; //중복될경우 let사용
        url += `search_json2.jsp?collection=kmdb_new2&detail=Y`;   //search_json2 <--json으로 변경
        url += `&title=${movieNm}&releseDts=${openDt}`;
        url += `&ServiceKey=${key}`;
        
        // console.log(url);    
        let result = await fetch(url);  //**await사용시 async 같이 씀)(에러방지)
        let jsonData = await result.json(); //json으로 바꿔줘야함 (문자열로 바꾸야하기때문)
    
        return jsonData;

    } //onMovieDetail









    /** 
     * KMDB 영화 포스터 검색 - 20241127 
     * */
    export async function searchMoviePoster(movieNm, openDt){

        const key = `TDSG188W34566K65X667`;
        const url = `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y&title=${movieNm}&ServiceKey=${key}&releaseDts=${openDt}`; 

        // console.log(url);

        const result = await fetch(url);
        const jsonData = await result.json();
        
        return jsonData.Data[0].Result[0].posters.split("|")[0]; //이미지주소하나씩가져옴

    }




    /** 
     * KOBIS 영화 정보 호출 함수 
     * */

    export async function kobisMovieDetail(movieCd) {
        const key = `e0a980916aa2f83b657475b56aa5203f`;
        const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=${key}&movieCd=${movieCd}`; 
        console.log(url);
        
        const movie = await fetch(url);
        const jsonData = await movie.json();
        
        return jsonData.Data[0];

    }
        






    /** KOBIS 박스오피스 정보 호출 함수 */

    export async function kobisBoxOffice(type, searchDt) {
        const key = `1387ed83604df30a0c5d9dfdea0cba00`;
        // const key = `e0a980916aa2f83b657475b56aa5203f`;
        const url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/search${type}BoxOfficeList.json?key=${key}&targetDt=${searchDt}`; 
        console.log(url);
        
        const kobis = await fetch(url);
        const jsonData = await kobis.json();
        
        return jsonData;

    }

