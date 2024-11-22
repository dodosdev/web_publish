

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

