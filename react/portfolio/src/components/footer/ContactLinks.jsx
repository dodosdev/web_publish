import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-solid-svg-icons";

export default function ContactLinks() {
    

    return (
        <ul className="contact__links">
            {faLinkedin && faLinkedin.map((item)=>
            <li>
                <a className="contact__link" href="http://github.com">
                    {item.type === 'github' && <FontAwesomeIcon icon={faGithub} />}
                    {item.type === 'linkedin' && <FontAwesomeIcon icon={faLinkedin} />}
                </a>
            </li>
            )}
        </ul>
    );
}

