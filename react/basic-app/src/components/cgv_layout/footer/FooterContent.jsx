import { useState, useEffect } from "react";



export default function FooterContent() {
    const [companyInfo, setCompanyInfo] = useState({}); //useState
    

    useEffect(()=>{
        fetch("/data/cgv_compinfo.json") //useState 접속한 정보를 가져옴
        .then(data => data.json())
        .then(jsonData => setCompanyInfo(jsonData))
        .catch(error => console.log(error));
        
    }, []);
    

    

    return(

        <div class="footer-content">
            <div class="footer-intro">
                <ul>
                    {companyInfo.list && companyInfo.list.map(menu =>
                        <li><a href="#">{menu.name}</a></li>
                    )}
                </ul>
            </div>
            <p class="p">{companyInfo.address}</p>
            <p>대표이사 : {companyInfo.ceo}, 사업자등록번호 : 123-1245678, 통신판매업신고번호 : 201</p>
            <p>호스팅사업자 CJ올리브네트웍스 대표이메일 cjcgvmaster@cj.net</p>
            <p class="p2">
                <a href="/admin/admin_main.html" target="_parent">©</a>CJ CGV. All Rights Reserved</p>
    </div>

    );
}