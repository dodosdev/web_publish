export default function ProductMypage(){
    return (
        <div className="gods-detail" >
            <div class="tab-rects" role="tablist" data-component="[object Object]" style={{"width": "auto", "transform": "translateY(0px)",
                "backgroundColor": "green"}}>
                <ul id="goodsDetailTabsUl">
                    <li id="goodsDetailTabLi" role="tab" aria-selected="false" data-tab-info="godsDetailInfoTab"><a href="javascript:void(0)" role="button" tabindex="0">상품정보</a></li>
                    <li id="sizeTabLi" role="tab" aria-selected="true" data-tab-info="godsDetailSizeTab"><a href="#sizeTabView" role="button" tabindex="0">사이즈&amp;핏</a></li>
                    <li id="reviewTabLi" role="tab" aria-selected="false" data-tab-info="godsDetailReviewTab">
                        <a href="#shortcutReview" class="act_login_click" role="button">리뷰&nbsp;<em id="goodsReviewTabEm">(1)</em></a>
                    </li>
                    <li id="recommendGodListLi" role="tab" aria-selected="false" data-tab-info="godsDetailYouTab"><a href="#shortcutRelation" role="button"><span>추천</span></a></li>
                </ul>
            </div>
        </div>
    );
}