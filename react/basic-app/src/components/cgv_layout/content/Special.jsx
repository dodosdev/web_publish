import { useEffect, useState } from "react";
import SpecialItem from "./SpecialItem.jsx";

export default function Special(){
    const [list, setList] = useState([]);
    //set 상태값을 변경하는 함수
    //useState리액트가 관리하고 const[list, setList]list함수명
    //setList함수명앞에 set를붙이고대문자로시작함 setList로데이터를 넣고빼는기능을함.
    
    //dependency형태에따라 유즈이펙트안의 코드 실행 여부가 달라진다
    useEffect(()=>{
        fetch("/data/cgv_content.json")
        .then(data => data.json())
        .then(jsonData => setList(jsonData.specialList))
        .catch(error => console.log(error));
        
        }, []);
        //데이터가져오는건 }, []); 빈배열은 마운트 될때마다1번만 실행
        // )); 렌더링될때마다 실행
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
                        //list && list.map 리스트가 && AND
                        //있으면 불러오기
                            <li>
                                <SpecialItem
                                text1={item.text1}
                                text2={item.text2}/>
                            </li>
                        )}
                    </ul>
                </div>
                const A = 1
                const B = 3

                const result = (A==2) && (B==3)


            </div>
        </section>
    );

}