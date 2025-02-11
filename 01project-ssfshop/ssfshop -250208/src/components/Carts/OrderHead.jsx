export default function OrderHead(){
    return (
        <div className="order_set order_set_head">
                                {/* <p class="null">장바구니에 담긴 상품이 없습니다.</p> */}
                                
                                
                                <table>
                                    <thead>
                                        <tr>
                                            <th style={{textAlign:"left"}}>
                                                <label><input type="checkbox" className="all-check" name="cartAllCheckbox" 
                                                id="cartAllCheckbox0"/><i></i><span>전체선택</span></label>
                                            </th>
                                            <th className="submit">
                                                <a href="#" className="btn" style={{backgroundColor:"yellowgreen"}}>선택 상품 삭제</a>
                                            </th>
                                        </tr>
                                    </thead>
                                </table>
                </div>
    );
}