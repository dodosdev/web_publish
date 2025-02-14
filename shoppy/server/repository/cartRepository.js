import { db } from './db.js';

/**
 * 장바구니 전체 조회
 */
export const getItems = async()=> {
    const sql = `
            select sc.cid,
                sc.size,
                sc.qty,
                sm.zipcode,
                sm.address,
                sp.pid,
                sp.price,
                sp.description as info,
                concat('http://localhost:9000/', sp.upload_file->>'$[0]') as image
            from shoppy_cart sc,
                shoppy_member sm,
                shoppy_product sp
            where sc.id = sm.id and sc.pid =  sp.pid;

    `;
    const [result] = await db.execute(sql);
    return result;
}



/**
 * 장바구니 추가
 */
export const addCart = async({id, cartList}) => {

    let result_rows = 0;

    const result = await Promise.all(

        cartList.map(async(item) => {
                const values = [item.size, item.qty, id, item.pid];
                const sql = `
                    insert into shoppy_cart(size, qty, id, pid, cdate)
                        values(?,?,?,?,now())
                `;
                const [result] = await db.execute(sql,values); //Promise형태로 실행 //mysql맵핑
                return result.affectedRows;
                // console.log('result-->', result_rows);
                
        })
    )
        // console.log('result-->', result);
        result_rows = result.reduce((acc, cur) => acc + cur, 0);
        
        return {"result_rows": result_rows};

    
    
}