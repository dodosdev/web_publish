import AirbnbComponent from "./AirbnbComponent";
import { useEffect, useState } from "react";
import './Airbnb.css';



export default function AppAirbnb(){
    const [list, setList] = useState([]);

    useEffect(()=>{
        fetch("/data/airbnb.json")
            .then(data => data.json())
            .then(jsonData => setList(jsonData))
            .catch(error => console.log(error));
    }, []);

    
    return(
        <ul>
            {list && list.map((item) =>  //list값이 &&(true)일때만 보여줌
                <li>
                    <AirbnbComponent 
                            img={item.img}
                            d1={item.d1}
                            d2={item.d2}
                            d3={item.d3}
                            d4={item.d4}
                            isGood={item.isGood} //json -"isGood" : true <--true일때만 손호마크남옴
                            isheart={item.isheart}
                            color={item.color}
                            />
                </li>
            )}
        </ul>
    );
}
