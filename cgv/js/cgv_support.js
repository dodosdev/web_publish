



window.addEventListener("DOMContentLoaded" , (event) => {
    createNoticeList();
});



function createNoticeList() {
    fetch("../data/notice.json")
        .then((result) => result.json())  //fetch 실행결과 => result(문자열) => json()
        .then((jsonData) => {   //json데이터를 가리킴
            // console.log(jsonData);
            const list = jsonData.list;


    //         let output = `
    //         <thead>
    //             <tr>
    //                 <th>번호</th>
    //                 <th>구분</th>
    //                 <th>제목</th>
    //                 <th>등록일</th>
    //                 <th>조회수</th>
    //             </tr>
    //         </thead>
    //         <tbody>
    //         `;


            showNoticeList(jsonData.list);
            

        })
        .catch(error => console.log(error)); //에러
}//createNoticeList


/**
 *  table list
 */
function onChangNoticeList(code) {
    alert(code);
    //1. list 배열에서 code 를 filtering 새로운 배열 변환
    fetch("../data/notice.json")
        .then((result) => result.json())
        .then((jsonData) => {
            if(code === "total"){
                showNoticeList(jsonData.list);                
            } else {
                let filterList = jsonData.list.filter((object) => object.code === code); 
                //[{}, {}]  // object 안에있는 코드를 가져와서 이안에 넣는다[{}, {}]
                showNoticeList(filterList);
            }
        })
        .catch(error => console.log(error));

    //2. 테이블 출력코드 생성
    //3. 화면 출력
    
}

/**
 * 화면 출력 함수
 */
function showNoticeList(list) {
    let output = `
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>구분</th>
                            <th>제목</th>
                            <th>등록일</th>
                            <th>조회수</th>
                        </tr>
                    </thead>
                    <tbody>
            `;

            //forEach => <tr> ~</tr>
            list.forEach((notice, i) => {
                output += `
                    <tr>
                        <td>${i+1}</td>
                        <td>${notice.type}</td>
                        <td><a href="#">${notice.title}</a></td>
                        <td>${notice.date}</td>
                        <td>${notice.hits}</td>
                    </tr>
                `;
            });



            output += `
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="5">1 2 3 4 >></td>
                    </tr>
                </tfoot>
            
            `;

            document.querySelector("table").innerHTML = output;
}





