import React from 'react';

export default function Testimonial({img, alt, description, name, company}) {
    return (
        <>
            <p class="description">{description}</p>
            <ul class="testimonials">
                <li class="testimonial">
                    <img class="testimonial__img" src={img} alt={alt}/>
                    <div class="testimonial__bubble">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis similique, unde nam totam quam, nisi odio error amet provident iste modi eos dicta, eum suscipit rem illum inventore sapiente blanditiis?</p>
                    <p><a href="#" class="testimonial__bubble__name">{name}</a> / {company}</p>
                    </div>
                </li>
            </ul>
        </>
    );
}

