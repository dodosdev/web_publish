import { Link } from "react-router-dom";


export default function Nav(){
    return(
        <>
          <nav className='header-bottom'>
            <div className='nav-left'>
              <ul class="nav-main">		
                <li class="main"><a href="#">여성</a>
                  <ul class="sub_all">
                    <li>메인</li>
                    <li><a href="#">신상품</a></li>
                    <li><a href="#">전체 상품</a></li>
                    <li><a href="#">아우터</a></li>
                    <li><a href="#">재킷/베스트</a></li>
                  </ul>
                </li>	
                
                <li class="main"><a href="#">남성</a>
                  <ul class="sub_all">
                    <li>Top Brand</li>
                    <li><a href="#">빈폴 </a></li>
                    <li><a href="#">에잇 세컨즈</a></li>
                    <li><a href="#">띠어리</a></li>
                    <li><a href="#">로가디스</a></li>
                  </ul>
                </li>
                <li class="main"><a href="#">키즈</a>
                  <ul class="sub_all">
                    <li>Top Brand</li>
                    <li><a href="#">빈폴키즈</a></li>
                    <li><a href="#">리코스테키즈</a></li>
                  </ul>
                </li>
                <li class="main"><a href="#">럭셔리</a>
                  <ul class="sub_all">
                    <li>Top Brand</li>
                    <li><a href="#">메종카츠네</a></li>
                    <li><a href="#">아미</a></li>
                  </ul>
                </li>
                <li class="main"><a href="#">백&슈즈</a>
                  <ul class="sub_all">
                    <li>Top Brand</li>
                    <li><a href="#">토리 버치</a></li>
                    <li><a href="#">빈폴 액세서리</a></li>
                    <li><a href="#">르메르</a></li>
                  </ul>
                </li>
                <li class="main"><a href="#">스포츠</a>
                  <ul class="sub_all">
                    <li>Top Brand</li>
                    <li><a href="#">아디다스</a></li>
                    <li><a href="#">아식스</a></li>
                    <li><a href="#">아크테릭스</a></li>
                  </ul>
                </li>		
                <li class="main"><a href="#">골프</a>
                  <ul class="sub_all">
                    <li>Top Brand</li>
                    <li><a href="#">빈폴골프</a></li>
                    <li><a href="#">메종키츠네 골프</a></li>
                    <li><a href="#">란스미어 골프</a></li>
                  </ul>
                </li>		
                <li class="main"><a href="#">뷰티</a>
                  <ul class="sub_all">
                    <li>Top Brand</li>
                    <li><a href="#">아이오페</a></li>
                    <li><a href="#">엘지프라엘</a></li>
                    <li><a href="#">코이</a></li>
                  </ul>
                </li>		
                <li class="main"><a href="#">라이프</a>
                  <ul class="sub_all">
                    <li>Top Brand</li>
                    <li><a href="#">바겐슈타이거</a></li>
                    <li><a href="#">네스프레소</a></li>
                    <li><a href="#">소니</a></li>
                  </ul>
                </li>		
                <li class="main"><a href="#">아울렛</a>
                  <ul class="sub_all">
                    <li>Top Brand</li>
                    <li><a href="#">구호</a></li>
                    <li><a href="#">비이커</a></li>
                    <li><a href="#">준지</a></li>
                  </ul>
                </li>		
              </ul>
                <span>|</span>
                <ul className='nav-sub'>
                  <li>
                    <a href='#'>랭킹</a>
                  </li>
                  <li>
                    <a href='#'>브랜드</a>
                  </li>
                  <li>
                    <a href='#'>매거진</a>
                  </li>
                  <li>
                    <a href='#'>기획전</a>
                  </li>
                  <li>
                    <a href='#'>이벤트</a>
                  </li>
                </ul>
            </div>
            <div className='nav-right'>
              <ul className='nav-special'>
                <li>
                  <Link to='/signup'>회원가입</Link>
                  {/* 이 링크는 임시로 넣은 것입니다. 삭제해야합니다. */}
                </li>
                <li>
                  <a href='#'>삼성전자</a>
                </li>
              </ul> 
            </div>
          </nav>
        </>
    );
};