import React from 'react';
import AboutMeTitle from './AboutMeTitle.jsx';
import AboutMajors from './AboutMajors.jsx';
import AboutMeJob from './AboutMeJob.jsx';

export default function AboutMe() {

    
    return (
        <>
            <section id="about" class="section max-container">
                <AboutMeTitle 
                    title="About me"
                    titleCon="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Iure natus, temporibus perspiciatis repudiandae nostrum modi
                    doloremque expedita non eius ipsum! Beatae porro adipisci 
                    omnis architecto dignissimos. Iusto ipsa inventore adipisci."
                />

                <AboutMajors />
                <AboutMeJob />
            </section>

        </>
    );
}

