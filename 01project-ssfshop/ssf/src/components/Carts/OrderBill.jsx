export default function OrderBill(){
    return (
        <div className="bill" id="cartGroupBill0">
                                <h4>결제 예정 금액 <small>총 <em class="cssf" id="orderCntTxt">1</em>건</small></h4>
                                <div className="calc">
                                    <span className="retail"><em id="totalGodAmt">278,000</em>원<i>상품금액</i></span>
                                    <span className="plus">
                                        <em id="totalDlvAmt">0</em>원
                                        <i>배송비</i></span>
                                    <span className="minus"><em id="totalDcAmt">111,200</em>원<i>할인금액</i></span>
                                    <span className="total"><em id="totalOrdAmt">166,800</em>원<i>총 주문금액</i></span>
                                </div>
                                <div className="submit_order">
                                    <a className="btn bk" href="#" style={{backgroundColor:"yellowgreen"}}>주문하기</a>
                                </div>
                                <section id="memberloginLayer" class="layerNotice">
                                    <h1 class="center">회원만 구매 가능한 상품입니다.<br></br>로그인 후 구매해주세요.</h1>
                                    <div class="btns">
                                        <button class="btn bk" onclick="closeLayer('.layerNotice')">확인</button>
                                    </div>
                                </section>
                            </div>
    );
}