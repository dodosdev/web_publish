import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import { OrderContext } from '../context/OrderContext';
import { useOrder } from '../hooks/useOrder';

export default function PaymentSuccess() {
    const [getOrderList, saveToOrder] = useOrder();
    const [orderList] = useContext(OrderContext);
    const [searchParams] = useSearchParams();
    const pg_token = searchParams.get("pg_token");
    const [isRun, setIsRun] = useState(false);

    
    //pg_token && tid 가 존재하면 shoppy_order 테이블에 주문내역을 insert, shoppy_cart는 delete
    //oid(pk), pid, id, odate, total_price, tid, type, pname, qty 등.. (shoppy_order 테이블)

    useEffect (() => {
        const tid = localStorage.getItem("tid");
        tid && setIsRun(true);

        const fetchOrderList = async() => {
            const orderList = await getOrderList();
            console.log('fetchOrderList =>', orderList);
            
            
            if(orderList.length > 0){
                const totalPrice = orderList.reduce((sum, item) => sum + item.price * item.qty, 0);
                if(pg_token && tid){
                 //1. axios를 통한 DB insert --> orderList, total_price
                //2. useOrder 커스텀 훅을 이용한 DB insert
                    saveToOrder(orderList, totalPrice, tid, "kakaopay");
                }
            }    
        }
        
        if(isRun) {fetchOrderList(); }

    }, [isRun]);
    

    // const totalPrice = orderList.reduce((sum, item)=> sum + item.price * item.qty, 0);
    // if(pg_token && tid) {          
    //     //1. axios를 통한 DB insert --> orderList, total_price
    //     //2. useOrder 커스텀 훅을 이용한 DB insert
    //     saveToOrder(orderList, totalPrice, tid, "kakaopay");
    // }
    // console.log('total_price-->', orderList.reduce((sum, item) => sum + item.price * item.qty,0 ));
    


    return (
        <div>
            {
                pg_token && <h2> 결제가 완료 되있습니다.</h2>
            }
        </div>
    );
}
