// import LoginCartsNav from "../commons/LoginCartsNav";

import OrderBill from "../components/Carts/OrderBill";
import OrderDesc from "../components/Carts/OrderDesc";
import OrderGrayBox from "../components/Carts/OrderGrayBox";
import OrderHead from "../components/Carts/OrderHead";
import OrderMain from "../components/Carts/OrderMain";

export default function Carts(){
    return (
        <section id="main" className="content-wrap content-wrap-padding">
            <h1>장바구니</h1>   
            <section className="carts-wrap">
                <div className="tabs carts">
                        {/* <LoginCartsNav></LoginCartsNav> */}
                        <ul className="tab" style={{backgroundColor:"green"}}>
                            <li>
                                <a href="#tab1" className="on">회원</a>
                            </li>
                            <li>
                                <a href="#tab2" id="noneLogin" >비회원(주문조회)</a>
                            </li>
                            <li>
                                <a href="#tab2" id="noneLogin" >비회원(주문조회)</a>
                            </li>
                            <li>
                                <a href="#tab2" id="noneLogin" >비회원(주문조회)</a>
                            </li>
                        </ul>
                        
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