import React, { useEffect, useState } from 'react';
import Product from './Product.jsx';

export default function ProductList({cart}) {  
    //cart <--handleCartApp
    const [productList, setProductList] = useState([]); //전체 상품 리스트
    //productList를 만들기위한useEffect
    const [list, setList] = useState([]); //출력용리스트


    //useEffect(()=>{},[]);
    useEffect(()=>{
        fetch("/data/olive.json")
        .then(data => data.json())
        .then(jsonData => {
            setProductList(jsonData);
            setList(jsonData);
        }) //setProductList<--배열데이터를넣음
        .catch();
        
    }, []);

    const totalCart = (id) => {
        // alert(`producList- ${id} ::: 카트클릭!!`); //id값으로 상품 구분
        cart(id); //AppOlive의 HandleCartApp 함수호출
    }

    const [type, setType] = useState('total');  //value값을 useState에서 관리함//useState('total')전체값을가져옴
    //onClick이 일어나면 type

    const handleTypeChange = (event) => {
        setType(event.target.value);  //event는객체
    }
    console.log(`type---> ${type}`);
    

    useEffect(()=> {  // 필터링 목록-json data를 가져옴
        if(type ==='total'){
            setList(productList);
        } else {
                const list = productList.filter((item) => {    //{}나오면 return
                if(type === 'sale' && item.isSale){  //조건 만족하면 실행
                    return item;   //해당하는 item만 실행
                }else if(type === 'coupon' && item.isCoupon){ //순회하면서체크
                    return item; 
                }else if(type === 'today' && item.isToday) { 
                    
                    return item; 
                }
                
            });
            setList(list);
        }
    }, [type]); //radio

        // console.log(`useEffect--> ${type}`);
        //ProductList.map() ----> 결과 : [ '<li>~</li>', ] 
        //ProductList.filter() ----> 결과 : [{item}, {item}]  //결과에 맞는데이터가 있으면[]에 들어감
    

        


// "id": "p_0003", data.json 에서 제품을 구분할수있는 id사용(중복되면 안됨)
 //<input type="radio" name="type" />name을 똑같이하면 독립적으로 사용됨
    return (
        <>
            <div>
                <input type="radio" name="type" value="total" onClick={handleTypeChange} />전체 
                <input type="radio" name="type" value="sale" onClick={handleTypeChange} />세일
                <input type="radio" name="type" value="coupon" onClick={handleTypeChange} />쿠폰
                <input type="radio" name="type"  value="today" onClick={handleTypeChange} />오늘드림
            </div>
            <ul className='product-list-container'>
                {list && list.map(item =>  //productList && (null일때 넣음)
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
        </>
    );
}






