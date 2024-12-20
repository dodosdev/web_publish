import { useState, useEffect } from "react";
import HeaderTopMenu from "./HeaderTopMenu.jsx";

export default function HeaderTopMenuList() {

    const [topmenu, setTopMenu] = useState([]);

    useEffect(() => {
        fetch("/data/header.json")
        .then(data => data.json())
        .then(jsonData => setTopMenu(jsonData.HeaderTopMenuList))
        .catch(error => console.error(error));
    }, []);


    
    return (
        <nav>
            <ul class="header__menu">
                {topmenu && topmenu.map((menu) => ( 
                <li>
                    <HeaderTopMenu 
                        href={menu.href}
                        name={menu.name}/>
                </li>
                ))}
            </ul>
        </nav>
    );
}

