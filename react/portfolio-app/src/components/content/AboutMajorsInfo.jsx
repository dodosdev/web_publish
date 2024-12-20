import React from 'react';

export default function AboutMajors({title, majorsCon}) {
    return (
        
                <li class="major">
                    <i class="fa-brands fa-html5 major__icon"></i>
                    <p class="major__title">{title}</p>
                    <p>{majorsCon}</p>
                </li>
    );
}