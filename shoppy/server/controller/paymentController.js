import axios from 'axios';
/**
 * ㅣ카카오페이 QR 결제 함수
 */
export const paymentKakaopay = async(req, res) => {
    
    try {

        console.log(req.body);
        const {id, item_name, total_amount} = req.body;
        const KAKAO_ADMIN_KEY = "6494858726aa8879ead7931df5ec5092";
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);

        const response = await axios.post(
            "https://kapi.kakao.com/v1/payment/ready",
            {
                cid: "TC0ONETIME", // 테스트용 CID : TC0ONETIME
                partner_order_id: `order_${uniqueSuffix}`,
                partner_user_id: id,
                item_name,
                quantity: 1,
                total_amount,  //결제 api에서 제공하는 이름으로 맞춤
                tax_free_amount: 0,
                approval_url: "http://localhost:3000/payment/success",
                cancel_url: "http://localhost:3000/payment/cancel",
                fail_url: "http://localhost:3000/payment/fail",
            },
            {
                headers: {
                    Authorization: `KakaoAK ${KAKAO_ADMIN_KEY}`,
                    "Content-Type": "application/x-www-form-urlencoded",
            },
            }
        );
        console.log('qr-->', response.data);
        
        res.json(response.data);
    } catch (error) {
    console.error("QR 결제 요청 실패:", error);
    res.status(500).json(error.response.data);
    }
}