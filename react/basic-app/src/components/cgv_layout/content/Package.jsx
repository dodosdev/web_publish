import PackgeContent from "./PackgeContent.jsx";
import { useEffect, useState } from "react";


export default function Package() {
    const [plist, setPlist] = useState([]);
    
    useEffect(() =>{
        fetch("/date/cgv_content.json")
        .then(date => date.json())
        .then(jsonData => setPlist(jsonData.packageList))
        .catch(error => console.log(error));     
        
    }, []);

        

    return(
            <div className="content-even-special">

                <section className="package-content-list">
                    {plist.map(object=>
                    <PackgeContent 
                        title={object.title}
                        list={object.list}  /> 
                    )}
                </section>
            </div>

    );
}