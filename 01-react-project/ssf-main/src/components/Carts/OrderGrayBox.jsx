export default function OrderGrayBox(){
    return (
        <div className="gray_box">
				                    <h5>스토어 주문금액 합계</h5>
                                    <p>
                                        <span className="accounts">
                                            상품금액 <em id="sub_totalGodAmt">278,000</em>원
                                            &nbsp;&nbsp;+&nbsp;&nbsp;
                                            배송비 <em id="sub_totalDlvAmt">0원</em>
                                            &nbsp;&nbsp;-&nbsp;&nbsp;
                                            <em className="cssf">할인금액 <em id="sub_totalDcAmt">111,200</em>원</em>
                                        </span>
                                        <span className="price">
                                            <em id="sub_totalOrdAmt">166,800</em>원
                                            <span className="shipping_cost" id="subDlvCostPlcInfo4698">39,900원 이상 무료배송</span>
                                        </span>
                                    </p>
                                    {/* <!-- #137759 [21년 2분기] 사은품 행사 셀링 강화 --> */}
                                    <p className="appendix-box" id="subGiftPrm1" name="subGiftPrm1" style={{"display": "none"}}><span>특별혜택</span>
                                        {/* <!-- <a href="javascript:void(0)">null url</a> --></p> */}
                                    {/* <!-- #137759 [21년 2분기] 사은품 행사 셀링 강화 --> */}
                                    </p>
                                </div>
    );
}