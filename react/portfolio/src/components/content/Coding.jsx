import React from 'react';
import CodingBar from './CodingBar.jsx';

export default function Coding() {
    const codingList = [
        {
            "title": "HTML",
            "percent": 98
        },
        {
            "title": "HTML",
            "percent": 97
        },
        {
            "title": "HTML",
            "percent": 88
        },
        {
            "title": "HTML",
            "percent": 78
        },
        {
            "title": "HTML",
            "percent": 60
        }
        
    ]
    return (
        <article class="sklls__coding">
                <h3 class="skill__title">Coding Skills</h3>
                <ul>
                    {codingList && codingList.map((code) =>
                        <li class="bar">
                            < CodingBar 
                                title={code.title}
                                percent={code.percent}
                                
                            />
                        </li>     
                    )}
                </ul>
            </article>
    );
}

