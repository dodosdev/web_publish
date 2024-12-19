import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import About from './About.jsx';
import Signup from '../form/Signup.jsx';
import Layout from './Layout.jsx';
import Support from './Support.jsx';
import Login from '../form/CgvLoginForm.jsx';
import BestSeller from '../yes24/AppBestSeller.jsx';

export default function AppRouter() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout/>}> 
                        <Route index element={<Home/>} /> 
                        <Route path='/login' element={<Login/>} />  
                        <Route path='/signup' element={<Signup/>} />  
                        <Route path='/about' element={<About/>} />  
                        <Route path='/support' element={<Support />} />  
                        <Route path='/bestseller' element={<BestSeller />} />  
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
// path='/about' 컴퍼넌트를 찾음==> element={<Home/>}
// {<Layout/>} <--이화면의디자인담당
//  http://localhost:3000/   '/'메인홈표시
