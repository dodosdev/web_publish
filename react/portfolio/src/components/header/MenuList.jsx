import React from 'react';

export default function MenuList() {
    return (       
        <nav>
            <ul className="header__menu">
            <li><a className="header__menu__item active" href="#home">Home</a></li>
            <li><a className="header__menu__item" href="#about">About</a></li>
            <li><a className="header__menu__item" href="#skill">Skills</a></li>
            <li><a className="header__menu__item" href="#work">My work</a></li>
            <li><a className="header__menu__item" href="#testimonial">Testimonial</a></li>
            <li><a className="header__menu__item" href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

