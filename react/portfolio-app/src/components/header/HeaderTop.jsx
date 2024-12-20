import Logo from './Logo.jsx';
import HeaderTopMenuList from './HeaderTopMenuList';
import React from 'react';
// import HeaderBottom from './HeaderBottom.jsx';

export default function HeaderTop() {
    return (
            <>
                <header class="header">
                        <Logo
                            href="#"
                            src="images/favicon.ico"
                            alt="logo"
                            logo="dodo"
                        />
                        <HeaderTopMenuList />

                    <button id="menu_toggle" class="header__toggle" aria-label="navigation menu toggle">
                        <i class="fa-solid fa-bars"></i>
                    </button>
                </header>

            </>
    );
}

