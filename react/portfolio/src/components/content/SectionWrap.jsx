import React from 'react';

export default function SectionWrap({id, title, description, children}) {
    return (
    <section id={id} className="section max-container">
        <h2 classNameName="title">{title}</h2>
        {id=== 'skill' && <p class="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis beatae.</p>} 
        {id=== 'skill' ? <p>{description}</p> 
        : <p className="description">{description}</p>}
        {children}
    </section>
    );
}


