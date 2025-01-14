import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className='header-outer'>
                <div className='header'>
                    <Link to='/'>  
                        Shoppy Logo
                    </Link>
                    <nav>
                        <Link to='/all'>Products</Link>
                        <Link to='/cart'>My Cart</Link>
                        <Link to='/login'>pLogin</Link>
                        <Link to='/signup'>Sign up</Link>
                    </nav>
                </div>
            </div>
    );
}

