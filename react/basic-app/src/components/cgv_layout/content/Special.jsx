import { useEffect, useState } from "react";
import SpecialItem from "./SpecialItem.jsx";

export default function Special(){
    const [list, setList] = useState([]);
    //useState리액트가 관리하고 const[list, setList]list함수명
    //setList함수명앞에 set를붙이고대문자로시작함 setList로데이터를 넣고빼는기능을함.
    
    useEffect(()=>{
        fetch("/data/cgv_content.json")
        .then(data => data.json())
        .then(jsonData => setList(jsonData.specialList))
        .catch(error => console.log(error));
        
        }, []);
        console.log(list);
        
    return(

        <section>
            <div>
                <div class="content-title-style">
                    <h3>특별관</h3>
                    <button class="total-view-button">전체보기</button>
                </div>
                <div class="special-event-list">
                    <img src="/images/special1.png" alt="Special Image" width="500px" />
                    <ul>
                        {list && list.map(item => 
                        //list && list.map비어있을때안들어감
                            <li>
                                <SpecialItem
                                text1={item.text1}
                                text2={item.text2}/>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </section>
    );

}