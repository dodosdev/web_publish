import style from './styles/style.css';
import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; //react-router-dom에서 제공하는 컴포넌트
import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx'
import Carts from './pages/Carts.jsx';
import Person from './pages/Person.jsx';
import Products from './pages/Products.jsx';
import DetailProducts from './pages/DetailProducts.jsx';
function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout/>}>
                    <Route index element={<Home/>}></Route>
                    <Route path='/all' element={<Products/>}></Route>    
                    <Route path='/login' element={<Login/>}></Route>    
                    <Route path='/signup' element={<Signup/>}></Route>    
                    <Route path='/carts' element={<Carts/>}></Route>    
                    <Route path='/person' element={<Person/>}></Route>
                    <Route path={`/detail`} element={<DetailProducts/>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
