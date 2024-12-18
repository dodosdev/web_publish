import React, { useState } from 'react';
import BestBookButton from './BestBookButton.jsx';
import BestBookAvatar from './BestBookAvatar.jsx';
import BestBookContent from './BestBookContent.jsx';

export default function BestBook({list}) {


    // const [totalQty, setTotalQty] = useState(0); 
    // const list = [
    //     {"img": "https://image.yes24.com/goods/13137546/L"},
    //     {"img": "https://image.yes24.com/goods/108422348/L"},
    //     {"img": "https://image.yes24.com/goods/103495056/L"},
    // ];

    // const handleChangeQty = (qty) => { 
    //     //(카트에넣기)수량클릭을하면자식에받은호출을부모가받음
    //     setTotalQty(totalQty + qty); 
    //     //카트에담은수와버튼눌러담은책의수량과합산해서숫자가올라감
    // }


    return (
        <>
            {list && list.map((book, i) =>

            <div style={{'display':'flex', 'margin-bottom':'20px' }}>
                <BestBookAvatar 
                        rank={i+1}
                        img={book.img} />
                <BestBookContent 
                    suggest = {book.suggest} //{false}가려짐
                    today = {book.today} 
                    type={book.type}
                    title={book.title}
                    author={book.author}
                    company={book.company}
                    pubDate={book.pubDate}
                    price={book.price}
                    perSale={book.perSale}
                    point={book.point}
                />
        <BestBookButton />
        {/* {list.map((item) =>
            <div style={{display:'flex'}}>
                <img src={item.img} width="100px" />
                <BestBookButton  qtyChange={handleChangeQty} />
            </div>
        
        )} */}
        </div> 
        )}
        
        </>
    );
}


