import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { LuShoppingBag } from 'react-icons/lu';
import { AuthContext } from '../auth/AuthContext.js';
import { useNavigate } from 'react-router-dom';


export default function Carts({refreshStorage}) {
        const navigate = useNavigate
        const{ isLoggedIn } = useContext(AuthContext);
        const [ cartList, setCartList] = useState([]);

        useEffect(()=> {
            if(isLoggedIn){
                //DB -shoppy_cart에서 정보
                alert('db');
                axios
                    .post("http://localhost:9000/cart/items")
                    .then(res=>
                        console.log(res.data)                
                    )
                    .catch();
            } else {
                alert('localStorge');
            }
        }, {isLoggedIn});
    
    







    return (
        <div className="content">
            <h1>MyCart!!</h1>
            {/* <button onClick={()=>{handleOrder("all")}}>주문하기</button> */}
            <table border="1">
                <tr>
                    <th>Pid</th>
                    <th>Pname</th>
                    <th>Size</th>
                    <th>Qty</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th></th>                
                </tr>
                {/* {
                    cartList && cartList.map((item) => 
                        <tr>
                            <td>{item.pid}</td>
                            <td>{item.pname}</td>
                            <td>{item.size}</td>
                            <td>{item.qty}</td>
                            <td>{item.description}</td>
                            <td>
                                <img src={item.image} alt="" style={{width:"100px"}}/>
                            </td>
                            <td>
                                <button 
                                onClick={()=>{handleOrder("each", item.pid, item.size) }}>계속담아두기</button>
                            </td>                            
                        </tr>
                    )
                } */}
            </table>
            
        </div>
    );
}
