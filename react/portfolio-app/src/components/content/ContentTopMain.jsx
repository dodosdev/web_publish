import React from 'react';

export default function ContentTopMain({img, name}) {
    return (
        <>
            <img class="home__avatar" src={img} alt="Avatar img"/>
            <h2 class="home__title">
            <strong class="home__title--strong"></strong>{name}</h2>
            <p class="home__description">A software engineer currently residing in Seoul, South Korea</p>

            {/* <h2 class="home__title">Hello <b/> I'm 
            <strong class="home__title--strong">Dream Coder</strong>, Judy</h2>
            <p class="home__description">A software engineer currently residing in Seoul, South Korea</p> */}
        </>
            
    );
}



