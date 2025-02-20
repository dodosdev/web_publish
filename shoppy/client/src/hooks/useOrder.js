import React, { useContext } from 'react';
import { OrderContext } from '../context/OrderContext';
import { useCart } from '../hooks/useCart.js';
import axios from 'axios';

export function useOrder() {
    const { calculateTotalPrice } = useCart();
    const { orderList, setOrderList,
            orderPrice, setOrderPrice,
            member, setMember
        } = useContext(OrderContext);

    /** useContext로 관리되는 객체들의 CRUD 함수 정의 */
    /**
     * 전체 주문정보 가져오기 : getOrderList
     */
    const getOrderList = async() => {
        const id = localStorage.getItem("user_id");
        const result = await axios.post("http://localhost:9000/order/all", {"id": id});  
        console.log('order list-->', result.data);
        setOrderList(result.data);
        setMember(result.data[0]);
        calculateTotalPrice(result.data);

        return result.data;
    }

    const saveToOrder = async(orderList, totalPrice, tid, type) => {
        getOrderList();
        console.log('saveToOrder orderList -> ', orderList);
        console.log('saveToOrder orderPrice -> ', totalPrice);
        const id = localStorage.getItem("user_id");
        const formData = {
            "id": id,
            "tid": tid,
            "type": type,
            "totalPrice": totalPrice,
            "orderList": orderList
        };

        
        // const id = localStorage.getItem("user_id");
        const result = await axios.post("http://localhost:9000/order/add", formData);  
        console.log('result-->', result.data);
        // setOrderList(result.data);
        // setMember(result.data[0]);
    }
    


    return { getOrderList };
}

