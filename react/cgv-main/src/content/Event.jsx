import EventItem from "./EventItem";
import {useState, useEffect} from 'react';

export default function Event() {
    const [list, setList] = useState([]);

    useEffect(()=>{
        fetch("data/cgv_content.json")
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
                                <EventItem 
                                    src={item.src}
                                    title={item.title}
                                    date={item.date}
                                    />
                            </li>
                        )}

                    </ul>
                </div>
            </section>
        </div>
        

    );

}