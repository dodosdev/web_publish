import React from 'react';

export default function AboutMeTitle({title, titleCon}) {
    return (
        <>
            <h2 class="title">{title}</h2>
            <p class="description">{titleCon}</p>
        </>
    );
}

