

export default function Event({src, title, date}){
    return(


        <section>
            <div class="total-view-button">
                <ul class="content-even-list">
                    <li>
                        <div> 
                            <img src={src} alt="Event Image" width="200px" />
                        </div>
                        <p class="event-content-title">{title}</p>
                        <p class="event-content-title-date">{date}</p>
                    </li>
                    <li>
                        <div>
                            <img src={src} alt="Event Image" width="200px" />
                        </div>
                        <p class="event-content-title">{title}</p>
                        <p class="event-content-title-date">{date}</p>
                    </li>
                    <li>
                        <div>
                            <img src={src} alt="Event Image" width="200px" />
                        </div>
                        <p class="event-content-title">{title}</p>
                        <p class="event-content-title-date">{date}</p>
                    </li>
                </ul>
            </div>
        </section>
        
    
    );

}