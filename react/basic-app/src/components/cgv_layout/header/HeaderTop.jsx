import Logo from './Logo.jsx';
import HeaderTopImage from './HeaderTopImage.jsx';
import HeaderTopMenuList from './HeaderTopMenuList.jsx';

export default function HeaderTop(){
    return(
        <div class="header-top">
            <Logo
                href="#"
                    src="/images/logoRed.png" 
                    text="DEEP DIVE SPACE" 
                    target="_self" 
                    alt="CGV LOGO"
            />
            <HeaderTopImage  //HeaderTopImage 쓰려고하는 파일을 import
                src="/images/header_card.png" alt="Card_image" />
            <HeaderTopMenuList />
        </div>
    );
}