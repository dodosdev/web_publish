import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
//{ useParams }에 pid가 있음


export default function DetailProduct() {
    const { pid } = useParams();  //구조분해할당으로 pic를 가져옴 { "pid":pid }
    const [product, setProduct] = useState({}); //useState가 관리하는 product의 정보가 들어감({object넣음})

    useEffect(()=>{
        axios.get('/data/products.json') //http://localhost:3000/data/products.json
            .then((res) => {
                res.data.filter((product)=> {
                    if(product.pid === pid ) setProduct(product);
                
                });
            })

            .catch((error)=> console.log(error));
            
            
    }, []);

    console.log('product--->> ', product); //상품상세페이지
    


    

    return (
        <div className='content'>
            <div className='product-detail'>
                <img src={product.image} />
                <ul>
                        <li className="product-detail-title">{product.name}</li>
                        <li className="product-detail-title">{`${parseInt(product.price).toLocaleString()}원`}</li>
                        <li className="product-detail-subtitle">{product.info}</li>
                        <li>
                            <span className='product-detail-select1'>옵션 : </span>
                            <select className='product-detail-select2'>
                                    <option value="XS">XS</option>
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                            </select>
                        </li>
                        <li>
                            <button type="button" className='product-detail-button'>장바구니 추가</button>
                        </li>
                </ul>
            </div>
        </div>
    );
}

//aspx --> .net
// path--> /shop/wproduct