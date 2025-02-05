export default function LoginCartsNav(){
    return (
        <ul className="tab" style={{backgroundColor:"green"}}>
                        <li>
                            <a href="#tab1" className="on">회원</a>
                        </li>
                        <li>
                            <a href="#tab2" id="noneLogin" >비회원(주문조회)</a>
                        </li>
        </ul>
    );
}