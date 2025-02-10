import { Link } from "react-router-dom";


export default function FooterNav(){
    return(
        <>
          <nav className='footer-nav'>
            <div className='nav-left'>
              <ul className="nav-main">		
                <li className="main"><a href="#">회사소개</a>
                </li>	               
                <li className="main"><a href="#">이용약관</a>
                </li>
                <li className="main"><a href="#">개인정보처리방침</a>
                </li>
                <li className="main"><a href="#">이메일무단수집거부</a>
                </li>
              </ul>
                <span>|</span>
                <ul className='nav-sub'>
                  <li>
                    <a href='#'>멤버십안내</a>
                  </li>
                  <li>
                    <a href='#'>고객센터</a>
                  </li>
                  <li>
                    <a href='#'>매장찾기</a>
                  </li>
                  <li>
                    <a href='#'>공지사항</a>
                  </li>
                  <li>
                    <a href='#'>단체주문</a>
                  </li>
                </ul>
            </div>
            <div className='nav-right'>
              <ul className='nav-special'>
                <li>
                  <a href='#'>입점신청</a>
                </li>
                <li>
                  <a href='#'>제휴문의</a>
                </li>
                <li>
                  <a href='#'>입점사 대여 프로그램</a>
                </li>
              </ul> 
            </div>
          </nav>
        </>
    );
};