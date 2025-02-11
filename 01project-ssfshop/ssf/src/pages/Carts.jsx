import React, {useState} from "react";
import LoginCartsNav from "../commons/LoginCartsNav";

import OrderBill from "../components/Carts/OrderBill";
import OrderDesc from "../components/Carts/OrderDesc";
import OrderGrayBox from "../components/Carts/OrderGrayBox";
import OrderHead from "../components/Carts/OrderHead";
import OrderMain from "../components/Carts/OrderMain";

export default function Carts(){
    const [activeTab, setActiveTab] = useState("tab1");
    const menuListName = [
        { "tab": "tab1", "label": "일반배송(0)" },
        { "tab": "tab2", "label": "빠른배송(0)" },
        { "tab": "tab3", "label": "매장픽업(0)" },
        { "tab": "tab4", "label": "예약주문(0)" },
    ];
    return (
        <section id="main" className="content-wrap content-wrap-padding">
            <h1>장바구니</h1>   
            <section className="carts-wrap">
                <div className="tabs carts">
                        {/* 공통 컴포넌트 사용 */}
                        <LoginCartsNav activeTab={activeTab} setActiveTab={setActiveTab}
                                 menuListName={menuListName} />
                     
        
                        
                        <div className="order_wrap on all-group">
                            <OrderHead></OrderHead>
                            {/* 장바구니에 상품이 없는 경우 Head에서 관리*/}
                            <div className="order_set" id="cartSubGroup1">
                                <OrderMain></OrderMain>
                                {/* table을 컴포넌트로 */}
                                <OrderGrayBox></OrderGrayBox>
                            </div>

                           <OrderBill></OrderBill>


                            <OrderDesc></OrderDesc>
                            
                        </div>    
                </div>


               
            </section>

        </section>
    );
}