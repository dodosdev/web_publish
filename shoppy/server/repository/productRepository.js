import { db } from './db.js';

/**
 * 상품 상세 정보 조회
 */
export const getProduct = async(pid) => {
    const sql = `
        select pid,
                pname as name,
                price,
                description as info,
                upload_file as upload_file,
                source_file as upload_file,
                pdata,
                concat('http://localhost:9000/', upload_file->>'$[0]') as image,
                json_array (
					concat('http://localhost:9000/', upload_file->>'$[0]'),
                    concat('http://localhost:9000/', upload_file->>'$[1]'),
                    concat('http://localhost:9000/', upload_file->>'$[2]')
                ) as imgList,
                json_arrayagg(
					concat('http://localhost:9000/', jt.filename)
                ) as detailImagList					 
        from shoppy_product, 
			json_table (shoppy_product.upload_file, '$[*]'
						columns (filename  varchar(100) path '$' ) ) as jt
        where pid = 1;

    `;

    //where pid = ?   -- 계속 바뀌는 문자는 ? 로 표기
    const [result] = await db.execute(sql, [pid]);  // result = [(pid:4, ~)], [컬럼명, fields] ]
                                                         // 이차원 배열로 나옴-->결과문자, 컬럼명                       
    console.log('result-->', result[0]);

    return result[0];
    

}


/**
 * 전체 상품 리스트 조회
 */
export const getList = async() => {
    const sql = `
            select pid,
                pname as name,
                price,
                description as info,
                concat('http://localhost:9000/', upload_file->> '$[0]') as image,
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
        formData.price || 0,
        formData.description || "", //또는
        formData.uploadFile || null,
        formData.sourceFile || null
    ];

    const [result] = await db.execute(sql, values);
    return {"result_rows": result.affectedRows};
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