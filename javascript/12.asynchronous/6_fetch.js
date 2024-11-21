
// API의 Promise 리턴값 확인 후 호출
const url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=82ca741a2844c5c180a208137bb92bd7&targetDt=20120101`;

fetch(url)  // resolve(result), reject(error)
    .then((result) => {console.log(`result ==> ${result}`)})
    .catch((error) => {console.log(`error ==> ${error}`)});