import { db } from './db.js';


/**
 * add
 */
export const add = async(formData) => {


const result = await Promise.all(  
    formData.orderList.map(async(item) => {
        const values = [
            item.size,
            item.qty,
            formData.totalPrice,
            formData.type,
            formData.tid,
            formData.id,
            item.pid
        ];
        const sql = `
        insert into shoppy_cart(size, qty, tprice, type, tid, id, pid, odate)
            values(?, ?, ?, ?, ?, ? , ? current_date())
    `;
    const [result] = await db.execute(sql, values); //Promise형태로 실행

    return {"result_rows": result_rows}; 
    })
        // cartList.map(async(item) => {
        //         const values = [item.size, item.qty, id, item.pid];                   
        //         const result_rows = result.reduce((acc, cur)=> acc + cur, 0);          
        // })   
    )
    
}






/**
 * 전체 주문정보 가져오기 : getOrderList
 */
export const getOrderList = async({id}) => {
    const sql = `
            select * from view_order_list
                where id=?
    `;
    const [result] = await db.execute(sql, [id]);
    return result; 
}