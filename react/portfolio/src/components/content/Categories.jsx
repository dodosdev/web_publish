import React from 'react';
import Categorie from './Categorie.jsx';


export default function Categories() {
    const categoryList = [
        {
            "name": "All",
            "count": 2
        },
        {
            "name": "Front-end",
            "count": 2
        },
        {
            "name": "Back-end",
            "count": 2
        },
        {
            "name": "Mobile",
            "count": 2
        }
    ]
    
    return (
        <ul class="categories">
            {categoryList && categoryList.map((item)=>
                <li>
                    <Categorie 
                        name={item.name}
                        count={item.count}
                    />
                </li>
            )}
            
        </ul>
    );
}

