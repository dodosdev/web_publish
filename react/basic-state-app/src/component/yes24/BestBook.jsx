import React, {useState} from 'react';
import BestBookButton from './BestBookButton.jsx';

export default function BestBook() {
    const [totalQty, setTotalQty] = useState(0); 
    const list = [
        {"img": "https://image.yes24.com/goods/13137546/L"},
        {"img": "https://image.yes24.com/goods/108422348/L"},
        {"img": "https://image.yes24.com/goods/103495056/L"},
    ];

    const handleChangeQty = (qty) => { 
        //(카트에넣기)수량클릭을하면자식에받은호출을부모가받음
        setTotalQty(totalQty + qty); 
        //카트에담은수와버튼눌러담은책의수량과합산해서숫자가올라감
    }


    return (
        <>
            <div>전체카트수량 : {totalQty} </div> 
            {list.map((item) =>
                <div style={{display:'flex'}}>
                    <img src={item.img} width="100px" />
                    <BestBookButton  qtyChange={handleChangeQty} />
                </div>
            
            )}
        </>
    );
}


