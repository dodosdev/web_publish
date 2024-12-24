import React from 'react';

export default function Menu({href, menuName, style, click}) {
    return (
        <a className={style}
            href={href}
            oncClick={()=> { click(menuName) }}>{menuName}</a>
    );
}

