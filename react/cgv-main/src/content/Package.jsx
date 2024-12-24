import { useEffect, useState } from "react";
import PackageContent from './PackgeContent.jsx';

export default function Package() {
    const [plist, setPlist] = useState([]);
    
    useEffect(() =>{
        fetch("data/cgv_content.json")
        .then(data => data.json())
        .then(jsonData => setPlist(jsonData.packageList))
        .catch(error => console.log(error));     
        
    }, []);

        

    return(
            <div className="content-even-special">
                <section className="package-content-list">
                    {plist && plist.map((item) => // && - 들어오는 데이터(plist)가 True일 경우
                        <PackageContent title={item.title} list={item.list}></PackageContent>
                    )}
                </section>
            </div>

    );
}