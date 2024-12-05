export default function Event(){
    list = [
        {
            "src": "/images/event2.jpg",
            "title": "[CGV] 10월 컬처위크",
            "date":"2024.09.25~2024.10.31"
        },
        {
            "src": "/images/event2.jpg",
            "title": "[CGV] 10월 컬처위크",
            "date":"2024.09.25~2024.10.31"
        },
        {
            "src": "/images/event2.jpg",
            "title": "[CGV] 10월 컬처위크",
            "date":"2024.09.25~2024.10.31"
        }
    ];


    return(

        <section>
            <div class="content-title-style">
                <h3 class="content-title-style-font">Event</h3>
                <button className="total-view-button">전체보기</button>
            </div>
                    {list.map(item =>
                        <li>
                            <div> 
                                <img src={Image} alt="Event Image" width="200px">
                            </div>
                            <p class="event-content-title">영화가 맛있어지다! 씨네밀 전격 출시</p>
                            <p class="event-content-title-date">2024.09.25~2024.10.31</p>
                        </li>

                    )};
            
            
        
    </section>

    );

}