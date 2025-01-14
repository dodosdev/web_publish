import React, { useState, useEffect } from 'react';
import ProductAvata from './ProductAvata.jsx';
import axios from 'axios';

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
    for(let i=0; i < list.length; i+=3)  //[{0},{1},{2},{3}]  {4}
        rows.push(list.slice(i, i+3));  //[ [{0},{1},{2},{3}] 이미지 개씩 나열

    // console.log('rows-->', rows);
    

    return (
        <div>
        {
            rows.map((rowArray) => 
                <div className='product-list'>
                {rowArray.map(product =>
                    <ProductAvata img={product.image} />
                ) 
                }
                </div>
            )
        }            
        </div>
        );
}




{/* {
    list && list.map((product)=> 
        <ProductAvata img={product.image} />
    )
}              */}





