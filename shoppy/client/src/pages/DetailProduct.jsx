import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PiGiftThin } from "react-icons/pi";
import axios from "axios";
import ReturnDelivery from "../components/ReturnDelivery.jsx";
import Detail from "../components/Detail.jsx";
import Review from "../components/Review.jsx";
import QnA2 from "../components/QnA2.jsx";
import ImageList from "../components/commons/ImageList.jsx";



export default function DetailProduct({ addCart }) {
    
const { pid } = useParams();
const [product, setProduct] = useState({});
const [imgList, setImgList] = useState([]);
const [detailImgList, setDetailImgList] = useState([]);
const [size, setSize] = useState("XS");
// const [tabName, setTabName] = useState('detail');
// const tabLabels = ['DETAIL', 'REVIEW', 'Q&A', 'RETURN & DELIVERY'];
// const tabEventNames = ['detail', 'review', 'qna', 'return'];


useEffect(() => {
    axios
    .post("http://localhost:9000/product/detail", {"pid":pid}) 
    .then((res) => {
        console.log('res.data-->', res.data);
        setProduct(res.data);
        //uploadFile 배열의 3개 이미지를 출력형태로 생성하여 배열에 저장
        // const imgList = res.data.uploadFile.filter((image, i) => (i<3) && image);
        setImgList(res.data.imgList);
        setDetailImgList(res.data.detailImagList);
    })
    .catch((error) => console.log(error));
}, []);

// console.log('imgList--->', imgList);





//장바구니 추가 버튼 이벤트 - 제품상세페이지
const addCartItem = () => {
    //장바구니 추가 항목 : { pid, size, qty }
    // alert(`${pid} --> 장바구니 추가 완료!`);
    // console.log(product.pid, product.price, size, 1);
    const cartItem = {
    pid: product.pid,
    size: size,
    qty: 1,
    };
    addCart(cartItem); // App.js의 addCart 함수 호출 --부모에게 보냄
};


const [showReturnDelivery, setShowReturnDelivery] = useState(false);
const [category, setCategory] = useState('');
    const handleClickReturnDelivery = () => {
        setShowReturnDelivery(true);
        setCategory("returnDelivery");
    };

const handleClickDetail = () => {
    setCategory("detail");
};    
const handleClickReview= () => {
    setCategory("review");

}
const handleClickQnA = () => {
    setCategory("qna");

};



    return (
        <div className="content">
            <div className="product-detail-top">
                <div className="product-detail-image-top">
                <img src={product.image}  />
                <ImageList className="product-detail-top-list"
                            imgList={imgList} /> 
                {/* 디테일 3장 이미지리스트 부분 */}
                {/* <ul className="product-detail-image-top-list">
                    <li>
                    <img src={product.image} alt="" />
                    </li>
                    <li>
                    <img src={product.image} alt="" />
                    </li>
                    <li>
                    <img src={product.image} alt="" />
                    </li>
                </ul> */}
                </div>

                <ul className="product-detail-info-top">
                <li className="product-detail-title">{product.name}</li>
                <li className="product-detail-title">{`${parseInt(
                    product.price
                ).toLocaleString()}원`}</li>
                <li className="product-detail-subtitle">{product.info}</li>
                <li>
                    <p className="product-detail-box">신규회원, 무이자 할부 등</p>
                </li>
                <li className="flex">
                    <label className="product-detail-label">사이즈 </label>
                    <select
                    className="product-detail-select2"
                    onChange={(e) => setSize(e.target.value)}
                    >
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    </select>
                </li>
                <li className="flex">
                    <button type="button" className="product-detail-button order">
                    바로 구매
                    </button>
                    <button
                    type="button"
                    className="product-detail-button cart"
                    onClick={addCartItem}
                    >
                    쇼핑백 담기
                    </button>
                    <div type="button" className="gift">
                    <PiGiftThin />
                    <div className="gift-span">선물하기</div>
                    </div>
                </li>
                <li>
                    <ul className="product-detail-summary-info">
                    <li>상품 요약 정보</li>
                    </ul>
                </li>
                </ul>
            </div>

            {/* DETAIL / REVIEW / Q&A / RETURN & DELIVERY  */}
            <div className="product-detail-tab">
                {/* DETAIL / REVIEW / Q&A / RETURN & DELIVERY */}
                <ul>
                    <li onClick={handleClickDetail}><label>DETAIL</label></li>
                    <li onClick={handleClickReview}><label>REVIEW</label></li>
                    <li onClick={handleClickQnA}><label>Q&A</label></li>
                    <li onClick={handleClickReturnDelivery}><label>RETURN & DELIVERY</label></li>
                </ul>
                <div>
                    {category === "returnDelivery" ? <ReturnDelivery/>: null}
                    {category === "detail" ? <Detail imgList={detailImgList} /> : null}
                    {category === "review" ? <Review/> : null}
                    {category === "qna" ? <QnA2/> : null}
                </div>
                    {/* <div className="tabs_contents">
                        { tabName === "detail" && <Detail imgList={imgList} /> }
                        { tabName === "review" && <Review /> }
                    </div> */}
            </div>
        </div>
    );
}



