import React, {useState} from "react";
import LoginCartsNav from "../commons/LoginCartsNav.jsx";
import LoginTab1 from "../components/Logins/LoginTab1.jsx";
import LoginTab2 from "../components/Logins/LoginTab2.jsx";
export default function Login() {
    const [activeTab, setActiveTab] = useState("tab1");
    const menuListName = [
        { "tab": "tab1", "label": "회원" },
        { "tab": "tab2", "label": "비회원(주문조회)" },
    ];

    return (
        <>
            <section id="main" className="content-wrap content-wrap-padding">
                <h1>로그인</h1>
                <section className="login-wrap">
                    <div className="tabs logins">
                        <LoginCartsNav activeTab={activeTab} setActiveTab={setActiveTab} menuListName={menuListName} />
                        <LoginTab1 isActive={activeTab === "tab1"} />
                        <LoginTab2 isActive={activeTab === "tab2"} />
                    </div>
                </section>
            </section>
        </>
    );
}