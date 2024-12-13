import React, {useState} from 'react';
import Header from './Header.jsx';
import Body from './Body.jsx';
import MenuList from './header/MenuList.jsx';
import ProductList from './body/ProductList.jsx';

import './Olive.css';

export default function AppOlive() {
    // const [id, setId] = useState('');
    const [cartList, setCartList] = useState([]);
    //배열에 id 저장 --> 배열의 길이 --> cartCount

    const handleCartApp = (id) => {
        // alert(`AppOlive --> ${id}`);
        // setId(id);
        setCartList([...cartList, id]); //스프레드 연산사용해서 나열함 마지막으로 추가하는데이터 id를 추가
        // cartList.push(id); //배열에 하나씩 쌓임
    }

    console.log(`cartList--> ${cartList}`);
    

    return(
        <>
            <Header>
                <img src="https://static.oliveyoung.co.kr/pc-static-root/image/comm/h1_logo.png" />
                <MenuList count={cartList.length} />
            </Header>
            <Body>
                <ProductList cart={handleCartApp} />
            </Body>
        </>
    );
}