import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/shoppy.css';
import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Carts from './pages/Carts.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import DetailProduct from './pages/DetailProduct.jsx';
import NewProduct from './pages/NewProduct.jsx';
import { AuthProvider } from './auth/AuthContext.js';



export default function App() {
    /** 장바구니 리스트 : 배열 */
    const [cartList, setCartList] = useState([]); /**장바구니 아이템 저장: 배열 */
    const [cartCount, setCartCount] = useState(0); /**장바구니 상품 갯수 */



    /** cartCount가 업데이트 되면 localStorage에 cartList를 저장 */
    useEffect(()=>{
        localStorage.setItem("cartItems", JSON.stringify(cartList));
    }, [cartCount]);  // [cartCount]변경이 되면 자동으로 콜백실행()=>{}
    
    
    // cartList = [{oid:1, size:XSLTProcessor, qty:1}, {pid:2, size:matchMedia, qty:1}]
    // cartItem = {pid:1, size:XSLTProcessor, qty:1}
    // updateCartList = []


    /** 장바구니 추가 */
    const addCart = (cartItem) => {
        //입력받은 cartItem이 cartList에 존재하면 qty+1, 존재하지 않으면 새로 추가
        const updateCartList = cartList.some(checkItem => checkItem.pid === cartItem.pid && checkItem.size === cartItem.size) 
                                    ? cartList.map(item => 
                                        item.pid === cartItem.pid && item.size === cartItem.size ?
                                        {...item, qty:item.qty+1 }  // item의 qty+1
                                        :item
                                        ) 
                                    : [...cartList, cartItem];

        //some <--있는지없는지 확인
        setCartList(updateCartList); 
        setCartCount(cartCount + 1);  
        //장바구니에 상품이 담기면 갯수가올라감<Route path='/' element={<Layout cartCount={cartCount}/>}>  App.js -> Layout.jsx -> Header.jsx
        //자식이구조분해할당으로 addCart를 부모에게알려줌 App.js
    }

    // console.log('cartList ==>', cartList);
    // console.log('cartCount ==>', cartCount);

    


    return (
        <div> 
            <AuthProvider>
            <BrowserRouter> 
                <Routes>
                    <Route path='/' element={<Layout cartCount={cartCount}/>}> 
                        <Route index element={<Home />} /> 
                        <Route path='/all' element={<Products />} />  
                        <Route path='/cart' element={<Carts />} />  
                        <Route path='/login' element={<Login />} />  
                        <Route path='/signup' element={<Signup />} />  
                        <Route path='/products/:pid' element={<DetailProduct  addCart={addCart} />}/>  
                        <Route path='/products/new' element={<NewProduct />}/>  
                    </Route>
                </Routes>
            </BrowserRouter>
            </AuthProvider>
        </div>  // <BrowserRouter> -->전체 페이지가 바뀜
    );
}

//data/products.json의   <Route path='/products/:pid' pid는변수
//react hook  -->pid -->use param

