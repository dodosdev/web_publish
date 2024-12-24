import React from 'react';

export default function Categorie({name, count, style, click}) {
    return (
        <button className={style}
                // onClick={()=>{click(name)}} 클릭했을시
                onMouseOver={()=>{click(name)}} //마우스를 올렸을때
                >{name}<span className="category__count">{count}</span></button>
    );
}

