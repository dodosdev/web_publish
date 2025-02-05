import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/shoppy.css';
import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Carts from './pages/Carts.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import DetailProduct from './pages/DetailProduct.jsx';
import { AuthProvider } from './auth/AuthContext.js';



export default function App() {
    /** 장바구니 리스트 : 배열 */
    const [cartList, setCartList] = useState([]); /**장바구니 아이템 저장: 배열 */
    const [cartCount, setCartCount] = useState(0); /**장바구니 상품 갯수 */


    const addCart = (cartItem) => {
        console.log('cartItem ----->>', cartItem);
        setCartList([...cartList, cartItem]);
        setCartCount(cartCount + 1); //장바구니에 상품이 담기면 갯수가올라감
      //자식이구조분해할당으로 addCart를 부모에게알려줌App.js

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
                        <Route path='/cart' element={<Carts cartList={cartList} />} />  
                        <Route path='/login' element={<Login />} />  
                        <Route path='/signup' element={<Signup />} />  
                        <Route path='/products/:pid' element={<DetailProduct  addCart={addCart} />}/>  
                    </Route>
                </Routes>
            </BrowserRouter>
            </AuthProvider>
        </div>  // <BrowserRouter> -->전체 페이지가 바뀜
    );
}

//data/products.json의   <Route path='/products/:pid' pid는변수
//react hook  -->pid -->use param

