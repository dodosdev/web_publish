import React, { useState } from 'react';
import Menu from './Menu.jsx';

export default function MenuList() {
    const [select, setSelect] = useState('Home');

    const list = [
        {"href": "#home", "name":"Home"},
        {"href": "#about", "name":"About"},
        {"href": "#skill", "name":"Skill"},
        {"href": "#work", "name":"Work"},
        {"href": "#testimonial", "name":"Testimonial"},
        {"href": "#contact", "name":"Contact"}
    ];


    const handleClick = (menuName) => {
        console.log('menuName--->> ',menuName);
        setSelect(menuName);   
    }

    console.log('setSelect-->>, ');
    
    return (       
        <nav>
            <ul className="header__menu">
                {list && list.map((menu) =>
                    <li>
                        <Menu href={menu.href} 
                            menuName={menu.name} 
                            click={handleClick}
                            style={menu.name && setSelect ? 
                                    'header__menu__item .active'
                                    : 'header__menu__item'     // :아니면..
                            }
                            />
                    </li>
                )}
            </ul>
        </nav>
    );
}

