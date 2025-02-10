export default function OrderMain(){
    return (
            <table>
                {/* <caption>장바구니 일반배송</caption> */}
                <colgroup>
                    <col width="40"></col>
                    <col width="124"></col>
                    <col width="*"></col>
                    <col width="180"></col>
                    <col width="220"></col>
                </colgroup>
                <thead>
                    <tr className="thead">
                        <th colspan="3" scope="col">상품·혜택 정보</th>
                        <th scope="col">배송정보</th>
                        <th scope="col">주문금액</th>
                    </tr>
                </thead>
                <tbody>

                    <tr id="row1">
                        <td>
                            <label title="[三無衣服] 스트레치 방한 슬랙스 - 네이비 선택">
                                <input type="checkbox" name="check" id="1" /><i></i>
                            </label>
                        </td>

                        <td>
                            <a className="list_goods" href="#">
                                <img src="https://img.ssfshop.com/cmd/RB_100x132/src/https://img.ssfshop.com/goods/HMBR/24/09/04/GM0024090410257_0_THNAIL_ORGINL_20240920105654348.jpg"
                                    onerror="javascript:this.src='/v3/images/common/noImg_60.gif'" alt=""/>
                                <div className="keep">
                                    <span view-godno="GM0024090410257" view-godturn="1" className="heart on">
                                        <input type="radio" className="dummy on" title="찜하기"/>
                                    </span>
                                </div>
                            </a>
                        </td>

                        <td style={{textAlign:"left"}}>
                            <div className="badge">
                            </div>

                            <div className="info">
                                <span className="brand">GALAXY LIFESTYLE</span>

                                <span className="name">
                                    <a href="#">[三無衣服] 스트레치 방한 슬랙스 - 네이비</a>
                                </span>

                                <div className="selected_options">
                                    <ul>
                                        <li>
                                            남색 / 096 / 2개
                                        </li>
                                    </ul>
                                </div>

                                <div className="benefits">
                                    {/* <!-- #137759 [21년 2분기] 사은품 행사 셀링 강화 --> */}
                                </div>
                                    <div className="alter">
                                        <a href="#" className="btn" style={{backgroundColor:"yellowgreen"}}>옵션/수량 변경</a>

                                    </div>
                                </div>
                        </td>

                        <td>
                            <div className="shipping">
                                    <span className="cost" id="dlvCostView1">무료배송</span>
                                    <span></span>
                            </div>
                        </td>

                        <td>
                            <a href="#" className="delete">삭제</a>
                            <div className="price">
                                    <del>278,000원</del>
                                    <span>
                                        166,800원
                                        <em>40%</em>
                                    </span>
                            </div>
                            <div className="fulfill">
                                    <a href="#" className="btn bk" style={{backgroundColor:"yellowgreen"}}>바로구매</a>
                            </div>
                        </td>
                    </tr>

            </tbody>
    </table> 
    );
}