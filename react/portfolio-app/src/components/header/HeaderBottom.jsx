import React from 'react';

export default function HeaderBottom() {
    return (
        <section id="home">
            <img class="home__avatar" src="images/favicon.ico" alt="portfolio" />
            <h2 class="home__title">Hello <br/> I'm 
            <strong class="home__title--strong">Dream Coder</strong>, Judy</h2>
            <p class="home__description">A software engineer currently residing in Seoul, South Korea</p>
            <a class = "home__contact" href="#contact">Contact Me</a>
        </section>
    );
}

