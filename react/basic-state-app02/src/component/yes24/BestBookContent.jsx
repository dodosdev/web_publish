import React from 'react';

export default function BestBookContent(props) {  
    return (
        <div className='container-contant'>
            <div>
                {props.suggest && <span className='suggest'>강력추천</span>} 
                {props.today && <span className='today'>오늘의책</span>}
            </div>
            <div>
                <span>[{props.type}]</span>
                <span>{props.title}</span>
            </div>
            <div>
                <span>{props.author}</span>
                <span>{props.company}</span>
                <span>{props.pubDate}</span>
            </div>
            <div>
                <span>{props.price}</span>
                <span>({props.perSale}% 할인)</span>
                <span>({props.point}원)</span>
            </div>
        </div>
    );
}

