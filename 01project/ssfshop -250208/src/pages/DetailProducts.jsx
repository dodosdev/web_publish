import ProductMypage from "../commons/ProductMypage";
import DetailImage from "../components/DetailProducts/DetailImage";
import DetailOrder from "../components/DetailProducts/DetailOrder";
import DetailTop from "../components/DetailProducts/DetailTop";

export default function DetailProducts(){
    return (
        <>
        <div className="detail-wrap content-wrap">
            <DetailTop></DetailTop>
                <div class="gods-summary" view-section="summary">
                    {/* <!-- 상품 이미지 --> */}
                    <DetailImage></DetailImage>

                    <DetailOrder></DetailOrder>
                </div>

                <ProductMypage></ProductMypage>
               
        </div>
        </>
    );
}