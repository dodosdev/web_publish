import React, { useState } from 'react';
import Counter2 from './Counter2.jsx';

export default function AppCounter2() {
    const [total, setTotal] = useState(1);

    const handleTotal = (type) => {  //(type)에 +(증가)가 저장됨..//heap에 저장  
        type === '+' ? setTotal(total+1) : setTotal(total-1);
    }
                //자식에서 click이된것을 handleTotal로 부모에게알려줌
    return (
        <div>
            <Counter2 total={total} click={handleTotal} /> 
            <Counter2 total={total} click={handleTotal} />
            <Counter2 total={total} click={handleTotal} />
            <Counter2 total={total} click={handleTotal} />
            <Counter2 total={total} click={handleTotal} />
        </div>
    );
}



