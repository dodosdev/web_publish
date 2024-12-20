import React from 'react';

export default function HeaderTopMenu({href, name}) {
    return (
            <a class="header__menu__item" href={href}>{name}</a>
    );
}

