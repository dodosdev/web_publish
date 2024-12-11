import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function Product(props) {  // <li><Product><li>에 있는리스트를 (props)로 가져오기

    // function handleCart() {}
    const handleCart = () => {
        props.totalCart(props.id); //ProductList 컴포넌트 함수 호출 부모가자식에서 정보전달
    }
    
    //컴포넌트에 props 전달하기
    // React 컴포넌트는 props를 이용해 서로 통신합니다. 모든 부모 컴포넌트는 props를 줌으로써 몇몇의 정보를 자식 컴포넌트에게 전달할 수 있습니다. props는 HTML 어트리뷰트를 생각나게 할 수도 있지만, 객체, 배열, 함수를 포함한 모든 JavaScript 값을 전달할 수 있습니다.
    //구조분해할당: 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 JavaScript 표현식





    return (
        <div className='product-container'>
            <div>
                <img src={props.img} />
                {/* <FontAwesomeIcon 
                    icon={faCartShopping}
                    onClick={handleCart}
                    className='cart'/> */}
                {/* <button type='button' onClick={()=> {handleCart()}}>[Carat]</button> */}
                {/* <button type='button' onClick={()=> {handleCart()}}><FontAwesomeIcon 
                    icon={faCartShopping}
                    onClick={handleCart}
                    className='cart'/></button> */}
                <div><FontAwesomeIcon 
                    icon={faCartShopping}
                    onClick={handleCart}
                    className='cart'/></div>
            </div>
            <p className='title'>{props.title}</p>
            <div className='description'>{props.description}</div>
            <div className='price'>
                <span className='price'>{props.price}원</span>
                <span className='sprice'>{props.sprice}원</span>
            </div>
            <div className='tags'>
                {props.isSale && <span className='t1'>세일</span> }
                {props.isCoupon && <span className='t2'>쿠폰</span> }
                {props.isToday && <span className='t3'>오늘드림</span> }
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

