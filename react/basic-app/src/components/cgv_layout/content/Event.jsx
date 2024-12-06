import EventItem from "./EventItem.jsx";
import { useState, useEffect} from "react";

export default function Event(){
    const [list, setList] = useState([]);

    useEffect(()=>{
        fetch("/data/cgv_content.json") //데이터를 저장해둔json파일 불러오기
        .then(data => data.json())
        .then(jsonData => setList(jsonData.eventList))
        .catch(error => console.log(error));
        
    }, []);



    return(

        <div class="content-even-special">
            <section>
                <div class="content-title-style">
                    <h3 class="content-even-list">EVENT</h3>
                    <button class="total-view-button">전체보기</button>
                </div>        
            </section>
            <section>
                <div class="total-view-button">
                    <ul class="content-even-list">
                        {list && list.map(item =>
                            <li>
                                <div> 
                                    <img src={item.src} alt="Event Image" width="200px" />
                                </div>
                                <p class="event-content-title">영화가 맛있어지다! 씨네밀 전격 출시</p>
                                <p class="event-content-title-date">2024.09.25~2024.10.31</p>
                            </li>

                        )};

                    </ul>
                </div>
            </section>
        </div>
        

    );

}