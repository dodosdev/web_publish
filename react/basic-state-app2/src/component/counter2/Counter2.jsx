import React, { useState } from "react";

export default function Counter2({total, click}) { //부모쪽에서 받아서넣음
    const [count, setCount] = useState(0);
    return (
        <div style={{width:'500', margin:'auto'}}>
            <div>
                <span style={{fontSize:27}}>{count}</span>
                <span>/</span>
                <span style={{fontSize:27}}>{total}</span>
            </div>
            <button type="button" onClick={()=> {
                    setCount(count+1);
                    click('+'); // 부모에서 받은 키값 handleTotal  
                    // //('+') 라는 기호를갖고 부모(AppCounter2)에게간다
                }}>증가</button>
            <button type="button">감소</button>
        </div>
    );
}

