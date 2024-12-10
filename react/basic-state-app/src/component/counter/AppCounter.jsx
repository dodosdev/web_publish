import Counter from './Counter.jsx';
import { useState } from 'react';
import './Counter.css';

export default function AppCounter() {
    const [totalNumber, setTotalNumber] = useState(0);

    //totalNumber 변경 => 자식인 Counter 컴포넌트 이벤트가 발생했을떄
    const handleClick = (number, type) => {
        // console.log(`(count-->${number})`);
        // console.log(`(type-->${type})`);
        // setTotalNumber(totalNumber + 1);     
        if( number < 10 && type === '+' ) {
            setTotalNumber(totalNumber + 1);
        } else if(number > 0 && type === '-') {
            setTotalNumber(totalNumber - 1);
        }
    }

    return(
        <div className="counter-container">
            <Counter total={totalNumber} click={handleClick} />
            <Counter total={totalNumber} click={handleClick} />
            <Counter total={totalNumber} click={handleClick} />
        </div>
    );
}

//  <Counter total={totalNumber} click={handleClick} /> //부모가갖고있는키값을 알려줌