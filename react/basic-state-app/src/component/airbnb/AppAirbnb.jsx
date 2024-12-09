import AirbnbComponent from "./AirbnbComponent";
import './Airbnb.css';

export default function AppAirbnb(){
    const list = [
        {
            "img":"https://a0.muscache.com/im/pictures/aa715257-38ff-45ff-8bb7-3a7e321cf385.jpg",
            "d1":"한국 가평군",
            "d2":"가평 전망",
            "d3":"12월 10일 ~15일",
            "d4":"12345"
        },
        {
            "img":"https://a0.muscache.com/im/pictures/hosting/Hosting-962166410706461229/original/cd3ed5a6-7588-47a2-aec5-d53dc3b8c5a1.jpeg",
            "d1":"한국 수동면",
            "d2":"가평 전망",
            "d3":"12월 10일 ~15일",
            "d4":"12345"
        },
        {
            "img":"https://a0.muscache.com/im/pictures/aa715257-38ff-45ff-8bb7-3a7e321cf385.jpg",
            "d1":"한국 가평군",
            "d2":"가평 전망",
            "d3":"12월 10일 ~15일",
            "d4":"12345"
        }
    ];

    
    return(
        <ul>
            {list.map((item) =>
                <li>
                    <AirbnbComponent 
                            img={item.img}
                            d1={item.d1}
                            d2={item.d2}
                            d3={item.d3}
                            d4={item.d4} />
                </li>
            )}
        </ul>
    );
}