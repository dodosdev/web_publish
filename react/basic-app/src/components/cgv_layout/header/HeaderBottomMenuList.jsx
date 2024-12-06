import HeaderBottomMenu from './HeaderBottomMenu.jsx';
import { useEffect, useState } from 'react';
// import { fetchJSON } from '../js/commons.js';

export default function HeaderBottomMenuList() {
    const [names, setNames] = useState([]); // useState 데이터가 바뀌면 자동렌더링함

    useEffect(() => {
        // fetchJSON("/data/cgv_header.json")
        //     .then(result => setNames(result.headerBottomMenuList))
        //     .catch(error => console.log(error));
        
        fetch("/data/cgv_header.json")
            .then(date => date.json())
            .then(jsonData => setNames(jsonData.headerBottomMenuList))
            .catch(error => console.log(error));
            
    }, []);

console.log('names',names);

    // const names = [
    //         { "name": "영화" },  //item => item.name
    //         { "name": "극장" },
    //         { "name": "예매" },
    //         { "name": "스토어" },
    //         { "name": "이벤트" },
    //         { "name": "혜택" },
    // ];

    return (

    <ul className="flex-container">
        {names && names.map(item =>
            <li>
                <HeaderBottomMenu name={item.name} />
            </li>
        )}
    </ul>

    );
}