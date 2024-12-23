import React from 'react';

export default function Menu({href, menuName}) {
    return (
        <a class="header__menu__item" href={href}>{menuName}</a>
    );
}

