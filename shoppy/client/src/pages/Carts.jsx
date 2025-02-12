import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { LuShoppingBag } from 'react-icons/lu';


export default function Carts() {
  //localStorage에 담긴 cartItems의 배열객체 출력
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems"))); //JSON객체로 만들어줌

  //pids 배열 생성 cartItems의 pid 값을 pids 배열에 추가
  const pids = cartItems && cartItems.map(item => item.pid); // [5, 11]


  useEffect(()=> {
    if(pids.length > 0){

      //axios를 이용하여 DB 연동
      axios
      .post("http://localhost:9000/product/cartList", {"pids" : pids})  //네트워크 요청
      .then(res => {
        // console.log('res-->', res.data); 
        
        // cartItems에 res.data의 정보 추가
          const updateCartItems = cartItems.map((item, i) =>
            item.pid === res.data[i].pid
            &&    {
                    ...item, 
                    "pname" : res.data[i].pname,
                    "price" : res.data[i].price,
                    "description" : res.data[i].description,
                    "image" : res.data[i].image
                  }
                //:  item
          );
        // [{pid, siz, qty, pname, price...image}, {}]
        setCartItems(updateCartItems);
      })
      .catch(error => console.log(error));  
     //if
    } 
  }, []);

  console.log('cartItems-->>', cartItems);


  


  return (
    <div className='content'>
      <h1>My Cart!</h1>
      <table border="1">
        <tr>
          <th>Pid</th>
          <th>Pname</th>
          <th>Size</th>
          <th>Qty</th>
          <th>Description</th>
          <th>Image</th>
        </tr>
        {
            cartItems && cartItems.map((item) =>
              <tr>
                  <td>{item.pid}</td>
                  <td>{item.pname}</td>
                  <td>{item.size}</td>
                  <td>{item.qty}</td>
                  <td>{item.description}</td>
                  <td>
                    <img src={item.image} alt="" style={{width:"100px"}} />
                  </td>
              </tr>
            )
        }
      </table>
    </div>
  )
}
