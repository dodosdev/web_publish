export default function DetailOrder(){
    return (
        <div className="godsInfo-area">
                        <div class="tags">
                            <span>무료배송</span>
                        </div>
                        <h2 class="brand-name">
                            <a href="/Clove/main?brandShopNo=BDMA19E27&amp;brndShopId=RTCLO&amp;dspCtgryNo=">Clove</a>
                        </h2>
                        <div class="gods-name" id="goodDtlTitle">[24FW clove] Fair Isle Sweater (Brown)</div>
                        <div class="price-info">
                            <span class="gods-price">
                                    <span class="cost"><span class="wa_hidden">원가</span><del>238,000</del></span>
                                            <span class="sale">
                                        <span class="wa_hidden">할인율</span><em class="discount">37%</em>
                                        <span class="wa_hidden">판매가</span><em class="price">149,940</em>
                                        {/* <span class="tooltip-info">

                                            <span class="tooltip-info">
                                                    <i class="info sm">?</i>
                                                    <div class="tooltip-box">
                                                        <span class="tip-title">할인내역</span>
                                                        <dl class="price-info">
                                                            <dt>상품할인</dt>
                                                            <dd>-71,400원</dd>
                                                            <dt>쿠폰할인<p>2025-01-06&nbsp;19:20 ~ 2025-02-10&nbsp;09:59</p></dt>
                                                            <dd>-16,660원</dd>
                                                        </dl>
                                                        <dl class="total-price">
                                                            <dt>총 할인금액</dt>
                                                            <dd>-88,060원</dd>
                                                        </dl>
                                                        <p class="tip-txt">현재 가격은 즉시할인쿠폰이 포함된 금액이며 회원에 한하여 적용됩니다.</p>
                                                    </div>
                                                </span>
                                        </span> */}
                                </span>
                            </span>
                            <button class="btn bk sm" type="button" onclick="openGodDwldPsbCpnListLayer(); return false;"
                            style={{"backgroundColor":"yellowgreen"}}><span>쿠폰다운</span></button>
                        </div>
                        <div id="goodsInfoReviewDiv" class="review-info">
                            <span class="point"><i aria-label="rate"></i><em id="goodsInfoReviewScore">5</em></span>
                            <a href="javascript:void(0);">리뷰<em>1</em>건</a>
                            <a href="#" class="styled-cnt" id="goodsInfoDiverCnt" data-is-load="false" style={{"display": "none"}}></a>
                        </div>
                    </div>
    );
}