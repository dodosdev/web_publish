import React, { useState, useEffect } from 'react';
import ProductAvata from './ProductAvata.jsx';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ProductList() {
    const [list, setList] = useState([]); //list변경시 실시간 업데이트
    

    // useEffect(()=>{}, []);
    useEffect(()=>{
        axios.get('data/products.json')  //axios데이터를 통해서옴
        .then((res) => setList(res.data))
            // console.log('data------>>>', res.data);     
        .catch((error) => console.log(error));
        
    
        
        // fetch('/data/products.json')
        //     .then((data) => data.json()) //json파일로바꿈
        //     .then((jsonData) => {   //json 데이터는 (jsonData) 변수로 가져옴
        //         setList(jsonData);  //setList를통해서 json데이터를 전역변수화 시킴
        //     })  
        //     .catch();
    }, []);

    //출력 리스트 생성 [ [{},{},{}], [{},{},{}], [{}]]
    const rows = [];
    for(let i=0; i < list.length; i+=3)  //[{0},{1},{2}
        rows.push(list.slice(i, i+3));  //[ [{0},{1},{2}] 이미지 3개씩 나열

    // console.log('rows-->', rows);
    

    return (
        <div>
        {
            rows.map((rowArray, index) => 
                <div key={index} className='product-list'> 
                {rowArray.map(product => 
                    <Link key={product.pid} to={`/products/${product.pid}`}>  
                        <ProductAvata img={product.image} />
                    </Link>
                ) 
                }
                </div>
            )
        }            
        </div>
        );
}




//Link에서 연결경로 data/products.json 에서 --> "pid"   : "1" 번호로 상품구분 연결 <Link to='/products/1'>   //페이지 전환시 pid번호가 바뀜
//링크명은 중복되지 않게만 쓰면됨  
// <Link to={`/products/${product.pid}`}>  <--/products 브라우저의 페이지의 종류를 구분하기 위해 주소경로명을 만들수 있음


{/* {
    list && list.map((product)=> 
        <ProductAvata img={product.image} />
    )
}              */}





