import React from 'react';
import { Link } from 'react-router-dom';
import { LuShoppingBag } from "react-icons/lu";


export default function Header() {
    return (
        <div className='header-outer'>
            <div className='header'>
                <Link to='/' className='header-left'>  
                    <LuShoppingBag />
                    <span>Shoppy</span>
                </Link>
                <nav className='header_right'>
                    <Link to='/all'>Products</Link>
                    <Link to='/cart'>My Cart</Link>
                    <Link to='/login'>
                        <button type='button'>Login</button>
                    </Link>
                    <Link to='/signup'>
                        <button type='button'>Sign up</button>
                    </Link>
                </nav>
            </div>
        </div>
    );
}


// 리액트 아이콘 제공  https://react-icons.github.io/react-icons  /