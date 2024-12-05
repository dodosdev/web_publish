

export default function Event({src, title, date}){
    return(


        <section>
            <div class="total-view-button">
                <ul class="content-even-list">
                    <li>
                        <div> 
                            <img src={src} alt="Event Image" width="200px">
                        </div>
                        <p class="event-content-title">{title}</p>
                        <p class="event-content-title-date">{date}</p>
                    </li>
                    <li>
                        <div>
                            <img src="/cgv/images/event2.jpg" alt="Event Image" width="200px">
                        </div>
                        <p class="event-content-title">[CGV] 10월 컬처위크</p>
                        <p class="event-content-title-date">2024.09.25~2024.10.31</p>
                    </li>
                    <li>
                        <div>
                            <img src="/cgv/images/event1.jpg" alt="Event Image" width="200px">
                        </div>
                        <p class="event-content-title">[콜렉터블 무비머니]Vol.1 맥스 달튼</p>
                        <p class="event-content-title-date">2024.09.25~2024.10.31</p>
                    </li>
                </ul>
            </div>
        </section>
        
    
    );

}