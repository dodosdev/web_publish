import React, { useEffect, useState } from 'react';
import Product from './Product.jsx';

export default function ProductList({cart}) {  
    //cart <--handleCartApp
    const [productList, setProductList] = useState([]);
    
    //useEffect(()=>{},[]);
    useEffect(()=>{
        fetch("/data/olive.json")
        .then(data => data.json())
        .then(jsonData => setProductList(jsonData)) //setProductList<--배열데이터를넣음
        .catch(error => console.log(error));
        
    }, []);

    const totalCart = (id) => {
        // alert(`producList- ${id} ::: 카트클릭!!`); //id값으로 상품 구분
        cart(id); //AppOlive의 HandleCartApp 함수호출
    }

    

    // console.log(`productList --> ${productList}`);
    



    // const productList =[
    //     {
    //         "id": "p_0001",
    //         "rank": "1",
    //         "img": "https://image.oliveyoung.co.kr/cfimages/cf-goods/uploads/images/thumbnails/400/10/0000/0021/A00000021392508ko.jpg?l=ko",
    //         "title": "메디힐",
    //         "description":"[재구매 1위/No.1 보습윤광케어] 달바 화이트 트러플 퍼스트 스프레이 세럼",
    //         "price": "39000",
    //         "sPrice": "29000",
    //         "isSale": "true",
    //         "isCoupon": "false",
    //         "isToday" : "true"

    //     },
    //     {
    //         "id": "p_0002",
    //         "rank": "2",
    //         "img": "https://image.oliveyoung.co.kr/cfimages/cf-goods/uploads/images/thumbnails/400/10/0000/0021/A00000021402112ko.jpg?l=ko",
    //         "title": "에스트라",
    //         "description":"올영1등크림] 에스트라 아토베리어365 크림 80ml",
    //         "price": "39000",
    //         "sPrice": "29000",
    //         "isSale": "true",
    //         "isCoupon": "true",
    //         "isToday" : "true"

    //     },
    //     {
    //         "id": "p_0003",
    //         "rank": "3",
    //         "img": "https://image.oliveyoung.co.kr/cfimages/cf-goods/uploads/images/thumbnails/400/10/0000/0021/A00000021395913ko.jpg?l=ko",
    //         "title": "메디힐",
    //         "description":"[재구매 1위/No.1 보습윤광케어] 달바 화이트 트러플 퍼스트 스프레이 세럼",
    //         "price": "39000",
    //         "sPrice": "29000",
    //         "isSale": "true",
    //         "isCoupon": "true",
    //         "isToday" : "true"

    //     },
    //     {
    //         "id": "p_0003",
    //         "rank": "3",
    //         "img": "https://image.oliveyoung.co.kr/cfimages/cf-goods/uploads/images/thumbnails/400/10/0000/0015/A00000015899140ko.jpg?l=ko",
    //         "title": "메디힐",
    //         "description":"[재구매 1위/No.1 보습윤광케어] 달바 화이트 트러플 퍼스트 스프레이 세럼",
    //         "price": "39000",
    //         "sPrice": "29000",
    //         "isSale": "true",
    //         "isCoupon": "false",
    //         "isToday" : "true"

    //     }
    // ];


    return (
        <ul className='product-list-container'>
            {productList && productList.map(item =>  //productList && (null일때 넣음)
            <li><Product 
                totalCart = {totalCart}
                id={item.id}
                img = {item.img} 
                title = {item.title}
                description ={item.description}  
                price= {item.price}
                sprice={item.sprice}
                isSale={item.isSale}
                isCoupon={item.isCoupon}
                isToday={item.isToday}
                />
            </li>

            )}
        </ul>
    );
}




// "id": "p_0003", data.json 에서 제품을 구분할수있는 id사용(중복되면 안됨)

