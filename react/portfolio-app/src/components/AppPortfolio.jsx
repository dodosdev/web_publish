import React from 'react';
import Header from './Header.jsx';
import HeaderTop from './header/HeaderTop.jsx';
import HeaderTopMenuList from './header/HeaderTopMenuList.jsx';
import Content from './Content.jsx';
import Footer from './Footer.jsx';
import './css/style.css';
import ContentTopBtn from './content/ContentTopBtn.jsx';
import ContentTopMain from './content/ContentTopMain.jsx';
import ContentTop from './content/ContentTop.jsx';
import AboutMe from './content/AboutMe.jsx';
import AboutMeTitle from './content/AboutMeTitle.jsx';
import FooterCon from './footer/FooterCon.jsx';
import MySkills from './content/MySkills.jsx';
import MyWork from './content/MyWork.jsx';
import Testimonial from './content/Testimonial.jsx';
import Aside from './content/Aside.jsx';
import AboutMajors from './content/AboutMajors.jsx';
import AboutMeJob from './content/AboutMeJob.jsx';



export default function AppPortfolio() {
    return (
        <div>
            <Header>
                <HeaderTop />
                <HeaderTopMenuList />
            </Header>
            <Content>
                <ContentTop />
                <ContentTopMain />
                <ContentTopBtn />
                <AboutMe />
                <AboutMeTitle />
                <AboutMajors />
                <AboutMeJob />
                <MySkills />
                <MyWork />
                <Testimonial />
                <Aside />
            </Content>
            <Footer>
                <FooterCon />          
            </ Footer>
        </div>
    );
}

