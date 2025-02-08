import FooterNav from '../commons/FooterNav.jsx';


export default function Footer(){
    return (
    <footer>
        <div className='nav-area content-wrap'>
          <FooterNav></FooterNav>
        </div>
        <div className='company-area content-wrap'>
            <h5 className='company-title'>삼성물산(주)패션부문</h5>
            <p>
              <span>주소: 서울특별시 강남구 남부순환로 2806(도곡동)</span>
              <span>대표 : 오세철 외 2명</span>
              <span>사업자 등록번호: 101-85-43600 <a href="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=1018543600" target="_blank">사업자정보확인</a></span>
              <span>통신판매업 신고번호: 제 2015-서울강남-02894</span>
              <span>호스팅서비스: 삼성물산(주)패션부문</span>
            </p>
            <p>
              <span>KG모빌리언스 구매안전(에스크로)서비스  
                <a href="https://cp.mcash.co.kr/mcht/usersite/main/escrowAuth.do?bizNo=1018543600" 
              target="_blank">서비스 가입사실 확인</a> 
              고객님의 안전거래를 위해 현금 등으로 5만원 이상 결제 시 저희 쇼핑몰에서 가입한 구매안전(에스크로) 서비스를 이용하실 수 있습니다.</span>
            </p>
            <p>대표전화 <em className="contact">1599-0007(전국)</em> <em className="contact">080-700-1472(수신자부담)</em></p>
            <p className="copyright">Copyright (C) 2024 Samsung C&amp;T Corporation. All rights reserved</p>

            <div className="etc">
                    <p className="ismsp">
                        <a href="/images/mark-ismsp.png" alt="" >
                            인증범위 : 패션부문 온라인 쇼핑몰 서비스 운영 (SSFSHOP, 토리버치)&nbsp;&nbsp;|&nbsp;&nbsp;유효기간 : 2022.08.12 ~ 2025.08.11
                        </a>
                    </p>
                    <a href="/images/youtube.png" className="youtube" role="button" aria-label="YouTube"></a>
                    <a href="/images/instagram.png" className="instagram" role="button" aria-label="Instagram"></a>
                </div>
        </div>
    </footer>
    );
}