/** KMDB API 호출 */
export async function kmdb(type, value, title) {
    console.log(type, value, title);
    
    const serviceKey = `TDSG188W34566K65X667`;
    let url = `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/`;  // url +=  주소연결
    url += `search_json2.jsp?collection=kmdb_new2&detail=Y&`;   //search_json2 <--json으로 변경
    url += `${type}=${value}&title=${title}`;
    url += `&ServiceKey=${serviceKey}`;

    // console.log(`url :: ${url}`);
    let api = await fetch(url);  //**await사용시 async 같이 씀
    let jsonData = await api.json(); //json으로 바꿔줘야함 (문자열로 바꾸야하기때문)

    return jsonData;

}

   // http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y&&ServiceKey=TDSG188W34566K65X667


   // http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_xml2.jsp?collection=kmdb_new2&detail=Y&director=%EB%B0%95%EC%B0%AC%EC%9A%B1&ServiceKey=TDSG188W34566K65X667










