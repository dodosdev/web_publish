/*
*내용 : 비동기시 네트워크 연동 실행 함수
@AudioParam{*} 
url@returns
*/ 


export async function fetchJSON(url) {
    const data = await fetch(url);
    const jsonData = await data.json();

    return jsonData;
}