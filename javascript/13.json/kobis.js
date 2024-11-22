import { kobisBoxOffice as boxOffice } from './kobisCommons.js';



initForm();

function initForm() {
    const output = `
        <h1>일별 박스 오피스</h1>
        <div id="search">
            <select id="type">
                <option value="default">선택</option>
                <option value="Daily">일별</option>
                <option value="Weekly">주간/주말</option>
            </select>
            <input type="text" id="searchDt" placeholder="20241121">
            <button type="button" id="searchBtn">Search</button>
        </div>
        <div id="result"></div>
    `;

    document.querySelector("body").innerHTML = output;
    


    //기본 박스오피스 화면 출력 : 20241121
    searchBoxOffice('Daily', '20241121');



    /** Search 버튼 이벤트 추가 */
    let searchButton =  document.querySelector("#searchBtn");
    searchButton.addEventListener('click', ()=>{
        //searchDt 입력창의 유효성 체크
        //비어있을때 메세지
        let type = document.querySelector("#type");
        let searchDt = document.querySelector('#searchDt');
        // alert(type.value + searchDt.value);

        if(type.value === 'default') {
            alert('박스일자를 입력해주세요'); 
            type.focus(); 
        }else if(searchDt.value === '') {
            alert('검색일자를 입력해주세요'); 
            searchDt.focus();   //비어있는 상태에서 search 버튼을 누르면 자동으로 input박스에 커서가  
        }else{ 
            searchBoxOffice(type.value, searchDt.value); 
        }
    });

    }//end of initForm
    


    /**
     * KOBIS 박스오피스 정보 호출 함수
     */
    // async function kobisBoxOffice(type, searchDt) {
    //     const key = `e0a980916aa2f83b657475b56aa5203f`;
    //     const url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/search${type}BoxOfficeList.json?key=${key}&targetDt=${searchDt}`; 

    //     const kobis = await fetch(url);
    //     const jsonData = await kobis.json();
        
    //     return jsonData;

    // }



    /**
     * 일별 박스오피스 정보 화면 출력
     */
    function searchBoxOffice(ktype, searchDt) {
        boxOffice(ktype, searchDt)  // Promise 객체로 리턴
            .then((result) => {

                console.log(result.boxOfficeResult.boxofficeType);
                let rankList = null;


                const type = result.boxOfficeResult.boxofficeType;
                const range = result.boxOfficeResult.showRange;

                if(ktype ==='Daily'){
                    rankList = result.boxOfficeResult.dailyBoxOfficeList;
                }else if(ktype === 'Weekly'){
                    rankList = result.boxOfficeResult.weeklyBoxOfficeList;
                }

                
                
                let output = `
                    <h5>박스오피스 타입 : ${type}</h5>
                    <h5>박스오피스 일자 : ${range}</h5>
                    <table border=1>
                        <tr>
                            <th>순위</th>
                            <th>제목</th>
                            <th>개봉일</th>
                            <th>당일관객수</th>
                            <th>누적관객수</th>
                        </tr>`;

                    rankList.forEach((element) => {
                        output += `
                        <tr>
                            <td>${element.rank}</td>
                            <td>${element.movieNm}</td>
                            <td>${element.openDt}</td>
                            <td>${element.audiCnt}</td>
                            <td>${element.audiAcc }</td>
                        </tr>

                    `;
                });
                    
                output += `</table>`;
                // console.log();
                
            
                //테이블 화면 출력
                document.querySelector("#result").innerHTML = output;
        
            })
            .catch();
        
    }
