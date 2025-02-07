import * as repository from '../repository/productRepository.js';


/**
 * 전체 상품 리스트 조회
 */
export const getList = async(req, res) => {
    const result = await repository.getList();
    res.json(result);
    res.end();
}

/**
 * 상품 등록
 */
export const registerProduct = async(req, res) => {
    console.log('req.body-->', req.body);
    const result = await repository.registerProduct(req.body); //처리1순위
    //레파지토리 함수 //시간이 오래걸리는건 비동기처리
    res.json(result);
    res.end();
    
}

/**
    server port ===>> 9000
    req.body--> {
    productName: '키보드',
    price: '1000',
    description: '분홍키보드',
    uploadFile: 'upload_files\\1738903853851-439401887-6.webp',
    sourceFile: '6.webp'
    }
    
 */