import { useState, useEffect } from "react";
import AboutMeJobInfo from './AboutMeJobInfo.jsx';

export default function AboutMeJob() {
    const [aboutj, setAboutJ] = useState([]);

    useEffect(() => {
        fetch("/data/content.json")
        .then(data => data.json())
        .then(jsonData => setAboutJ(jsonData.jobs))
        .catch(error => console.error(error));
        
    }, []);



    // return (
    //     <li class="major">
    //         {aboutj && aboutj.map((menu) => {
    //         <AboutMeJobInfo
    //         <i class="fa-brands fa-html5 major__icon"></i>
    //         <p class="major__title">{title}</p>
    //         <p>{majorsCon}</p>  />
    //     </li>
    //     })}
            
    // );
}


