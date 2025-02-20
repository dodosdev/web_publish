import { db } from './db.js';

/**
 * 
 */
export const getOrderList = async({id}) => {
    const sql = `
            
    `;
    const [result] = await db.execute(sql, [id]);
    return result; 
}