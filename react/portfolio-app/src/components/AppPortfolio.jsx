import React from 'react';
import Header from './Header.jsx';
import HeaderTop from './header/HeaderTop.jsx';
import HeaderBottom from './header/HeaderBottom.jsx';
import Content from './Content.jsx';
import Footer from './Footer.jsx';
import './css/style.css';



export default function AppPortfolio() {
    return (
        <div>
            <Header>
                <HeaderTop />
                <HeaderBottom />
            </Header>
            <Content>
                
            </Content>
            <Footer>          
            </ Footer>
        </div>
    );
}

