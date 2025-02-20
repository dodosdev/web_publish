import React, { useEffect, useSearchParams } from 'react';
import axios from 'axios';

export default function PaymentSuccess() {
    
    const [searchParams] = useSearchParams();
    const pg_token = searchParams.get("pg_token");
    const tid = localStorage.getItem("tid");
    console.log('pg_token', pg_token);
    console.log('tid', tid);
    
    
    //pg_token && tid 가 존재하면 shoppy_order 테이블에 주문내역을 insert, shoppy_cart는 delete
    //oid(pk), pid, id, odate, total_price, tid, type, pname, qty 등.. (shoppy_order 테이블)




    // useEffect (()=> {
    //     const approvePayment = async () => {
    //         if(pg_token && tid) {
    //             try {
    //                 const response = await axios.post("http://localhost:9000/payment/approve", {pg_token, tid})

    //             } catch(error) {
    //             console.log("결제 승인 실패");

    //             }
    //         }
    // };
    // approvePayment();
    // ), [pg_token, tid]);


    return (
        <div>
            {
                pg_token && <h2> 결제가 완료 되있습니다.</h2>
            }
        </div>
    );
}
