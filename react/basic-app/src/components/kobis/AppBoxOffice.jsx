// import BoxOffice from './BoxOffice.jsx';
import { useEffect, useState } from 'react';
import BoxOffice from "./BoxOffice.jsx";

export default function AppBoxOffice() {
    const [dailyBoxOffice, setDailyBoxOffice] = useState([]);

    useEffect(() =>{
        const key = `e0a980916aa2f83b657475b56aa5203f`;
        const url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=e0a980916aa2f83b657475b56aa5203f&targetDt=20241203`; 

        fetch(url)
            .then(data => data.json())
            .then(daily => setDailyBoxOffice(daily.boxOfficeResult.dailyBoxOfficeList))
            .catch(error => console.log(error)); 
    }, []);


    return  (
            <div>
            <h1>KOBIS BoxOffice</h1>
                <div className='title'>
                    <BoxOffice
                            rank = "순위"
                            title = "제목"
                            open = "개봉일"
                            cnt = "당일관객수"
                            total="누적관객수"
                            amt = "누적매출액"
                            type = "title"

                        />
                </div>
                {/* <table border='1'>
                    <thead>
                        <tr>
                            <th>순위</th>
                            <th>제목</th>
                            <th>개봉일</th>
                            <th>당일관객수</th>
                            <th>누적관계수</th>
                            <th>누적매출액</th>
                        </tr>
                    </thead>
                    <tbody> */}
                <div className='content'>
                    {dailyBoxOffice.map(boxoffice =>
                    <div className='rank'>
                        <BoxOffice
                            rank = {boxoffice.rank}
                            title = {boxoffice.movieNm}
                            open = {boxoffice.openDt}
                            cnt = {boxoffice.audiCnt}
                            total = {boxoffice.audiAcc}
                            amt = {boxoffice.salesAmt}
                            type ="content"  
                            //~명, ~원을 붙임
                        />
                        
                    </div>
                    )}


                    {/* <tr></tr>
                </tbody> */}
            
                </div>

            </div>
    );
}