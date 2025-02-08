import Brands from "./Brands.jsx";

export default function HotBrand(){
    return (
        <section className="hot-brand">
            <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-autoheight swiper-backface-hidden">
                <div className="swiper-wrapper" id="swiper-wrapper-513dfba940703eb2" aria-live="polite" style={{"height": "260px"}}>
                    <Brands></Brands> 
                </div>
                

                {/* 슬라이드 버튼 - 컴포넌트로 만들 지 고민 중 */}
                <div className="swiper-button-control">
                    <div className="swiper-button-prev swiper-button-disabled" tabindex="-1" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-513dfba940703eb2" aria-disabled="true"></div>
                    <div className="swiper-pagination swiper-pagination-fraction swiper-pagination-horizontal"><span className="swiper-pagination-current">1</span> / <span className="swiper-pagination-total">3</span></div>
                    <div className="swiper-button-next" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-513dfba940703eb2" aria-disabled="false"></div>
                </div>
            <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
        </section>
    );
}