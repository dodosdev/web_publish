import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrow} from "@fortawesome/free-solid-svg-icons";


export default function Arrow() {
    return (
        <aside>
            <a class="arrow--up" href="#"><FontAwesomeIcon className="fa-solid fa-arrow-up" icon={faArrow} /></a>
        </aside>
    );
}




