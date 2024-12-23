import React from 'react';

export default function Top({title, description}) {
    return (
        <>
                <h2 class="title">{title}</h2>
                <p class="description">{description}</p>
        </>
    );
}

