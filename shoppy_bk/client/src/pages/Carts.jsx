import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from '../auth/AuthContext.js';
import { CartContext } from "../context/CartContext.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/cart.css";
import { useCart } from "../hooks/useCart.js";


export default function Carts() {
    const navigate = useNavigate();
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
    const { cartList, setCartList } = useContext(CartContext);
    const { getCartList, updateCartList, deleteCartItem } = useCart();
    const hasCheckedLogin = useRef(false);

    useEffect(()=>{
        if(isLoggedIn) {
            //테이블의 로그인 아이디의 카트 리스트 가져오기
            // getCartList();
            if(hasCheckedLogin.current) return;  //currunt 현재 --> true :로그인 상태인경우 -->  블록을 return해서 빠져나옴                                     
            hasCheckedLogin.current=  true;     

        } else {    
            const select = window.confirm("로그인 서비스가 필요합니다. \n로그인 하시겠습니까?");
            select ? navigate('/login') : navigate('/');
            setCartList([]);
        }
    } , [isLoggedIn]);

    console.log('cartList--------->> ', cartList);




    //수량 업데이트
    // const handleQtyUpdate = (cid, type) => {
    //     updateCartList(cid, type, "decrease");
    // }



        // /** 로컬스토리지 데이터 --> cartList add  //동기와 비동기를 같이사용한 방법*/
        // const addCartList = () => {
        //     const items = localStorage.getItem("cartItems"); //비동기
        //     setTimeout(()=>{
        //         setCartList([...JSON.parse(items)]);
        //     }, 0);
        // }

    

    return (
        <div className="cart-container">
        <h2 className="cart-header"> 장바구니</h2>
        {
            cartList && cartList.map(item => 
            <>
                <div className="cart-item" >
                <img src={item.image} alt="" />
                <div className="cart-item-details">
                    <p className="cart-item-title">{item.pname}</p>
                    <p className="cart-item-title">{item.size}</p> 
                    <p className="cart-item-price">
                    {item.price}원
                    </p>
                </div>
                <div className="cart-quantity">
                    <button onClick={() => {handleQtyUpdate(item.cid, "decrease")}}>
                    -
                    </button>
                    <input type="text" value={item.qty} readOnly />
                    <button onClick={() => {handleQtyUpdate(item.cid, "increase")}}></button>
                    <button >
                    +
                    </button>
                </div>
                <button className="cart-remove" onClick={()=> {deleteCartItem}}>
                    <RiDeleteBin6Line />
                </button>
                </div> 
            </>
            )
        }  
                <div className="cart-actions">                       
                    <button>주문하기</button>
                </div> 
                        
        </div>
    );
    }
