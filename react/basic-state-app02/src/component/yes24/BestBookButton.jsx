import React, {useState} from "react";

export default function BestBookButton() {
    const [qty, setQty] = useState(1);

    const handleClick = (type) => {
        if(type === '-'){
            (qty > 1) ? setQty(qty-1) : alert('최소 주문은 1개 이상입니다');
        }else if(type === '+') {
            setQty(qty + 1);
        }
    }

    return (       
            <ul className='container-button'>
                <li>
                    <input type="checkbox"></input>
                    <button type="button" onClick={()=> {handleClick('-')}}>-</button>
                    <span>{qty}</span>
                    <button type="button" onClick={()=> {handleClick('+')}}>+</button>
                </li>
                <li>
                    <button type="button" 
                        >카트에 넣기</button>
                </li>
                <li>
                    <button type="button">바로구매하기</button>
                </li>
                <li>
                    <button type="button">카트에 넣기</button>
                </li>
            </ul>
    );
}

//<button type="button" onClick={()=> {handleClick('-')}}>-</button>
//자식에서 onClick버튼을 눌러 호출을하면 부모에게 호출이됨