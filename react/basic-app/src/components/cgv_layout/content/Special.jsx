import SpecialItem from "./SpecialItem.jsx";

export default function Special(){
    const list = [
        { "text1": "SUITE CINEMA", "text2":"CINE & LIVINGROOM"},
        { "text1": "SUITE CINEMA", "text2":"CINE & LIVINGROOM"},
        { "text1": "SUITE CINEMA", "text2":"CINE & LIVINGROOM"},
        { "text1": "SUITE CINEMA", "text2":"CINE & LIVINGROOM"}
    ];



    return(

        <section>
                <div class="content-title-style">
                    <h3>특별관</h3>
                    <button className="total-view-button">전체보기</button>
                </div>
                <div className="special-content-slist">
                    <div className="special-event-list">
                        <img src="/cgv/images/special1.png" alt="Special Image" width="500px">
                    </div>
                    <ul>
                        {list.map(item =>
                            <li>
                                <SpecialItem
                                text1={item.text1}
                                text1={item.text2}/>
                            </li>
                        )}
                    </ul>
                </div>
        </section>
    );

}