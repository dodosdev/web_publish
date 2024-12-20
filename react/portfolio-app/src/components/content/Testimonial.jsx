import React from 'react';

export default function Testimonial() {
    return (
        <section id="testimonial" class="section max-container">
            <h2 class="title">Testimonial</h2>
            <p class="description">See what they say about me</p>
            <ul class="testimonials">
                <li class="testimonial">
                    <img class="testimonial__img" src="images/testimonials/people1.webp" alt="people1" />
                    <div class="testimonial__bubble">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis similique, unde nam totam quam, nisi odio error amet provident iste modi eos dicta, eum suscipit rem illum inventore sapiente blanditiis?</p>
                    <p><a href="#" className="testimonial__bubble__name">James Kim</a> / Google</p>
                    </div>
                </li>
                <li class="testimonial">
                    <img class="testimonial__img" src="images/testimonials/people2.webp" alt="people2" />
                    <div class="testimonial__bubble">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore necessitatibus sequi id obcaecati, assumenda quam corrupti. Numquam blanditiis praesentium, similique autem, accusamus debitis cupiditate, tempora officiis sed inventore nihil incidunt.</p>
                    <p><a href="#" className="testimonial__bubble__name">Smith Park</a> / Samsung</p>
                    </div>
                </li>
                <li class="testimonial">
                    <img class="testimonial__img" src="images/testimonials/people3.webp" alt="people3" />
                    <div class="testimonial__bubble">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio nulla incidunt autem ullam, commodi in impedit repellat exercitationem provident at recusandae doloremque pariatur temporibus hic blanditiis explicabo voluptatibus neque aliquam.</p>
                    <p><a href="#" className="testimonial__bubble__name">Anna Jin</a> / Samsung</p>
                    </div>
                </li>
            </ul>
        </section>
    );
}

