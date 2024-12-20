import { useState, useEffect } from "react";
import AboutMajorsInfo from './AboutMajorsInfo.jsx';


export default function AboutMajors() {

    const [aboutm, setAboutM] = useState([]);

    useEffect(() => {
        fetch("/data/content.json")
        .then(data => data.json())
        .then(jsonData => setAboutM(jsonData.majors))
        .catch(error => console.error(error));
        
    }, []);


    // return (
    //     <ul class="majors">
    //         {aboutm && aboutm.map(majorsl) => (
    //         <li class="major">
    //             <AboutMajorsInfo 
    //                 title={majorsl.title}
    //                 majorsCon={majorsl.majorsCon}/>
                
    //         </li>
    //         )}
    //     </ul>
    // );
}



