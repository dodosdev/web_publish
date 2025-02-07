import { db } from './db.js';


/**
 * 전체 상품 리스트 조회
 */
export const getList = async() => {
    const sql = `
            select pid,
                pname as name,
                price,
                description as info,
                concat('http://localhost:9000/', upload_file) as image,
                source_file,
                pdata
        from shoppy_product
    `;
    const [result] = await db.execute(sql);
    console.log('result-->', result);
    
    return result; 
}



/**
 * 상품 등록
 */
export const registerProduct = async(formData) => { //시간이걸리는건async사용
    //const sql -> mysql workbench에 작성한 이름과 동일해야함
    const sql = `
        insert into shoppy_product(pname, 
                                    price,
                                    description,
                                    upload_file,
                                    source_file,
                                    pdata)
        values(?,?,?,?,?, now())

    `;

    const values = [
        formData.productName,
        formData.price,
        formData.description,
        formData.uploadFile,
        formData.sourceFile
    ];

    const [result] = await db.execute(sql, values);
    return {"result_rows": result.affectedRows};
    // return {"result_rows": result.affectedRows};
}



/**
 * const values-> 터미널에 출력되는이름과 동일해야함
 * req.body--> {
    productName: '스니커즈',
    price: '12000',
    description: '분홍 스니커즈',
    uploadFile: 'upload_files\\1738906343633-426188975-4.webp',
    sourceFile: '4.webp'
}
 */