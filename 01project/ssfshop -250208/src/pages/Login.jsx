import LoginCartsNav from "../commons/LoginCartsNav";
import LoginTab1 from "../components/Logins/LoginTab1.jsx";
import LoginTab2 from "../components/Logins/LoginTab2.jsx"
export default function Login(){
    return (
        <>
        <section id="main" className="content-wrap content-wrap-padding">
            <h1>로그인</h1>
            <section className="login-wrap ">
                <div className="tabs logins">
                    <div>
                        
                    </div>
                    {/* <ul className="tab" style={{backgroundColor:"green"}}>
                        <li>
                            <a href="#tab1" className="on">회원</a>
                        </li>
                        <li>
                            <a href="#tab2" id="noneLogin" >비회원(주문조회)</a>
                        </li>
                    </ul> */}
                    <LoginCartsNav></LoginCartsNav>


                    <LoginTab1></LoginTab1>
                    
                    <LoginTab2></LoginTab2>      
                </div>
            </section>
        </section>

        </>
    );
}