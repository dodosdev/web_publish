import { Link } from "react-router-dom";


import Nav from "../commons/Nav.jsx";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { AiOutlineShopping } from "react-icons/ai";
// 헤더 메뉴 시작
const categories = [
  { label: "여성", link: "#" },
  { label: "남성", link: "#" },
  { label: "키즈", link: "#" },
  { label: "럭셔리", link: "#" },
  { label: "백&슈즈", link: "#" },
  { label: "스포츠", link: "#" },
  { label: "골프", link: "#" },
  { label: "뷰티", link: "#" },
  { label: "아울렛", link: "#" }
];

const subCategories = [
  { label: "랭킹", link: "#" },
  { label: "브랜드", link: "#" },
  { label: "매거진", link: "#" },
  { label: "기획전", link: "#" },
  { label: "이벤트", link: "#" }
];

const specialLinks = [
  { label: "회원가입", link: "/signup" },
  { label: "삼성전자", link: "#" }
];
// 헤더 메뉴 끝


export default function Header(){


    
    return (
    <header className='wrap-header'>
        <div className='header-top-wrap'>
          <ul className='header-top content-wrap'>
            {/* <li><a href='#'>마이페이지</a></li> */}
            <Link to='/person' className="person">마이페이지</Link>
            {/* <li><a href='#'>로그인</a></li> */}
            <Link to='/login' className="login">로그인</Link>
          </ul>
        </div>

        <div className='header-middle-wrap'>
          <div className='header-middle content-wrap'>
            <Link to='/' className='header-logo'><h1><span className="big-logo">SSF</span> <span className="small-logo">SHOP</span></h1></Link>

            <div className='icon-shop-wrap'>
              <div className='icon-wrap'>
                {/* <button type='button'><CiHeart /></button> */}
                <Link to='/detail'><button type='button'><CiSearch /></button></Link>
                <Link to='/carts'><button type='button'><CiHeart /></button></Link>
                <Link to='/carts'><button type='button'><AiOutlineShopping  /></button></Link>
              </div>
              <span>|</span>
              <div className='shop-wrap'>
                <a href='#'>site1</a>
                <a href='#'>site2</a>
                <a href='#'>site3</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className='header-bottom-wrap content-wrap'>
          <Nav categories={categories} subCategories={subCategories} specialLinks={specialLinks}></Nav>
        </div>
    </header>
    );
}