// fetch(resourceURL) - 비동기식 처리 방식으로 네트워크를 통해 리소르를 가져옴
// KOBIS 일별 박스오피스

let key = `e0a980916aa2f83b657475b56aa5203f`;
let target = `20241121`;  //어제 날짜로 변경
let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${target}`; 
//  http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=e0a980916aa2f83b657475b56aa5203f&targetDt=20241121



/** 결과 :

Response {
    status: 200,
    statusText: 'OK',
    headers: Headers {
        date: 'Fri, 22 Nov 2024 01:32:32 GMT',
        'content-type': 'application/json;charset=utf-8',
        'transfer-encoding': 'chunked',
        connection: 'keep-alive',  //요청이올때까지기다림
        server: '.'
    },
    body: ReadableStream { locked: false, state: 'readable', supportsBYOB: true },
    bodyUsed: false,
    ok: true,
    redirected: false,
    type: 'basic',
    url: 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=e0a980916aa2f83b657475b56aa5203f&targetDt=20241121'
}

 */



// 1 Response 객체
fetch(url)
    .then((response) => {console.log(response)}) //콜백함수 형태로...  //(response.json()<--json 가져오기 -결과: Promise { <pending> } 
    .catch((error) => {console.log(error)});


// 2. JSON 데이터 가져오기
let result = await fetch(url); // JSON객체가 문자열 데이터타입으로 가져옴  // fetch(비동기식)는 json함수를 꼭불러와야함 
let jsonData = await result.json(); // .json()함수를 통해 JSON 객체 타입 젼환  // await --> 패치가 생성될때까지 기다리게함
console.log(`type => ${jsonData.boxOfficeResult.boxofficeType} `);
console.log(`range => ${jsonData.boxOfficeResult.showRange} `);
console.log(`rankList => 
        ${jsonData.boxOfficeResult.dailyBoxOfficeList[0].rank} `); // 순위 정보가져옴
console.log(`rankList => 
        ${jsonData.boxOfficeResult.dailyBoxOfficeList[0].movieNm} `); // 영화 순위가져옴

//type => 일별 박스오피스 
// range => 20241121~20241121 
// rankList =>
//         1
// rankList =>
//         위키드




// JSON 데이터 :
let jsonData2 = {
    boxOfficeResult: {
    boxofficeType: '일별 박스오피스',
    showRange: '20241121~20241121',
    dailyBoxOfficeList: [
        [Object], [Object],
        [Object], [Object],
        [Object], [Object],
        [Object], [Object],
        [Object], [Object]
    ]
    }
}



