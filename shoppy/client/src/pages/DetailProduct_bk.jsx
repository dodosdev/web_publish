import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
//{ useParams }에 pid가 있음


export default function DetailProduct({addCart}) { 
    //DetailProduct를 갖고있는부모에게 addCart(장바구니의 상품정보)를알려줌
    const { pid } = useParams();  //구조분해할당으로 pid를 가져옴 { "pid":pid } 
    //useParams() -> react-router에서 제공하는 Hooks Parameter(파라미터) 값을 URL을 통해서넘겨받은 페이지에서 사용할 수 있도록 도와줌.
    const [product, setProduct] = useState({}); //useState가 관리하는 product의 정보가 들어감({object넣음})
    const [size, setSize] = useState('XS');

    useEffect(()=>{
        axios.get('/data/products.json') //http://localhost:3000/data/products.json
            .then((res) => {
                res.data.filter((product)=> {
                    if(product.pid === pid ) setProduct(product);
                
                });
            })

            .catch((error)=> console.log(error));
            
    }, []);


    //장바구니 추가 버튼 이벤트
    const addCartItem = () => {
        //장바구니 추가 항목 : {pid, size, count, price}  -- {}오브젝트 리터럴로 묶음
        // alert(`${pid} --> 장바구니 담기 완료!! `);
        console.log(product.pid, product.price, size, 1);  // 7 115000 XS 1
        const cartItem = {
            "pid" : pid,
            "size" : size,
            "qty" : 1,
            "price" : product.price
        }
        addCart(cartItem);  //cartItem부모에 넘겨줌--App.js 의 addCart 함수호출
    }




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
                            <select className='product-detail-select2'      
                                    onChange={(e)=> setSize(e.target.value)}> 

                                    <option value="XS">XS</option>
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                            </select>
                        </li>
                        <li>
                            <button type="button" className='product-detail-button' onClick={addCartItem}>장바구니 추가</button>
                        </li>
                </ul>
            </div>
        </div>
    );
}

//aspx --> .net
// path--> /shop/wproduct