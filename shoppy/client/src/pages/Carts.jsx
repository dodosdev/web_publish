import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { LuShoppingBag } from 'react-icons/lu';
import { AuthContext } from '../auth/AuthContext.js';
import { useNavigate } from 'react-router-dom';


export default function Carts() {
  const navigate = useNavigate();
  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext);

  //localStorage에 담긴 cartItems의 배열객체 출력
  // const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems"))); //JSON객체로 만들어줌


    const [cartList, setCartList] = useState(()=> {
        try {
            const initCartList = localStorage.getItem("cartItems");
            return initCartList ? JSON.parse(initCartList) : [];
        } catch (error) {
            console.error("로컬스토리지 JSON 파싱 오류:", error);
            return []; // 오류 발생 시 빈 배열 반환
        }
    });


    //pids 배열 생성 cartItems의 pid 값을 pids 배열에 추가
    const pids = cartList && cartList.map(item => item.pid);  // [5, 11]  

    useEffect(()=> {
        if(pids.length > 0){
            axios
            .post("http://localhost:9000/product/cartList", {"pids" : pids})
            .then(res =>{
              // console.log(res.data);
              
                //변수 = 조건 ? 값1 : 값2;
                //cartItems에 res.data의 정보 추가
                const updateCartList = cartList.map((item) => {
                    const filterItem = res.data.find((ritem)=> ritem.pid === item.pid); 
                    return filterItem ? 
                        {
                            ...item, 
                            "pname": filterItem.pname,
                            "price": filterItem.price,
                            "description": filterItem.description,
                            "image": filterItem.image
                        } 
                        : item
            });
                setCartList(updateCartList);
            })
            .catch(error => console.log(error));
        }// if
    }, [cartList]);



    /** 주문하기 이벤트 처리*/
    const handleOrder = () => {
        //1. 로그인 여부 체크 
        //로그인 --> DB 연동 후 저장
        //로그아웃 --> 로그인 > DB 연동 후 저장
                
        if(isLoggedIn) {
            //로그인 0 --> DB 연동 후 저장
            // console.log('isLoggedIn-->', isLoggedIn);
            //{"id" : "test1", "cartList": [~~~]}
            const id = localStorage.getItem("user_id");
            const formData = { "id":id, "cartList":cartList};
            axios
              .post("http://localhost:9000/cart/add", formData)
              .then(res => {
                console.log(res.data.result_rows);
                
                if(res.data.result_rows){
                  alert("장바구니에 추가되었습니다");
                  localStorage.removeItem("cartItems");
                }

                  // console.log(res.data)
              })
              .catch(error => console.log(error));
              
        } else {
          //로그인X --> 로그인 > DB 연동 후 저장
          //상품을 담은 장바구니에서 주문하기 클릭시 로그인창으로 이동함
          // alert("로그인이 필요한 서비스입니다.");
          window.confirm("로그인이 필요한 서비스입니다") && navigate('/login');
        }
        
    }


    return (
        <div className="content">
            <h1>MyCart!!</h1>
            <button onClick={handleOrder}>주문하기</button>
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
                {
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
                            <td><button>계속담아두기</button></td>                            
                        </tr>
                    )
                }
            </table>
            
        </div>
    );
}
