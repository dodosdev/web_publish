

initForm();

function initForm() {
    const output = `
        <h1>일별 박스 오피스</h1>
        <div>
            <lable>검색일자</lable>
            <input type="text" id="searchDt" placeholder="예) 20241121">
            <button type="button" id="searchBtn">Search</button>
        </div>
    `;

    document.querySelector("body").innerHTML = output;
    
    /** Search 버튼 이벤트 추가 */
    let searchButton =  document.querySelector("#searchBtn");
    searchButton.addEventListener('click', ()=>{
        //searchDt 입력창의 유효성 체크
        //비어있을때 메세지
        let searchDt = document.querySelector('#searchDt');
        if(searchDt.value === '') {
            alert('검색일자를 입력해주세요'); 
            searchDt.focus(); //비어있는 상태에서 search 버튼을 누르면 자동으로 input박스에 커서가 

            
        }
        //일별 박스오피스 정보 화면 출력
        searchBoxOffice(searchDt.value);

        });

    }//end of initForm

    /**
     * KOBIS 박스오피스 정보 호출 함수
     */
    async function kobsBoxOffice(searchDt) {
        const key = `e0a980916aa2f83b657475b56aa5203f`;
        const url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${searchDt}`; 

        const kobis = await fetch(url);
        const daily = await kobis.json();
        
        return daily;

    }



    /**
     * 일별 박스오피스 정보 화면 출력
     */
    function searchBoxOffice(searchDt) {
        kobsBoxOffice(searchDt) // Promise 객체로 리턴
            .then((result) => {
                console.log(result.boxOfficeResult.boxofficeType);
                console.log(result.boxOfficeResult.showRange);
                console.log(result.boxOfficeResult.dailyBoxOfficeList.length);
            })
            .catch();

        
    }







    