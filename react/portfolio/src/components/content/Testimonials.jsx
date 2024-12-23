import React from 'react';
import Testimonial from './Testimonial.jsx';

export default function Testimonials() {
    const testimonialList = [
        {
            "img": "images/testimonials/people1.webp",
            "alt": "people1",
            "description": "See what they say about me",
            "name" : "James Kim",
            "company": "Google"
        },
        {
            "img": "images/testimonials/people2.webp",
            "alt": "people2",
            "description": "See what they say about me",
            "name" : "James Kim",
            "company": "Google"
        },
        {
            "img": "images/testimonials/people3.webp",
            "alt": "people3",
            "description": "See what they say about me",
            "name" : "James Kim",
            "company": "Google"
        }
    ]

    return (
        <ul class="testimonials">

            {testimonialList && testimonialList.map((testimonials) => 
                <li class="testimonial">
                    <Testimonial 
                    img={testimonials.img}
                    alt={testimonials.alt}
                    name={testimonials.name}
                    company={testimonials.company}
                    />
                </li>

            )}
        </ul>
    );
}

