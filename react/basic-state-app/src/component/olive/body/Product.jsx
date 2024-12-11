import React from 'react';

export default function Product(props) {
    return (
        <div className='product-container'>
            <div>
                <img src={props.img} />
            </div>
            <p className='title'>{props.title}</p>
            <div className='description'>{props.description}</div>
            <div className='price'>
                <span className='price'>{props.price}원</span>
                <span className='sprice'>{props.sprice}원</span>
            </div>
            <div className='tags'>
                {props.isSale && <span className='t1'>세일</span> }
                {props.isCoupon && <span className='t2'>세일</span> }
                {props.isToday && <span className='t3'>세일</span> }
            </div>
            {/* <div>
                <img src="https://image.oliveyoung.co.kr/cfimages/cf-goods/uploads/images/thumbnails/400/10/0000/0021/A00000021392508ko.jpg?l=ko" />
            </div>
            <p className='title'>메디힐</p>
            <div className='description'>
            [재구매 1위/No.1 보습윤광케어] 달바 화이트 트러플 퍼스트 스프레이 세럼
            </div>
            <div className='price'>
                <span className='sprice'>39,000</span>
                <span className='fprice'>29,000</span>
            </div>
            <div className='tags'>
                <span className='t1'>세일</span>
                <span className='t2'>쿠폰</span>
                <span className='t3'>오늘드림</span>
            </div> */}
        </div>
    );
}

