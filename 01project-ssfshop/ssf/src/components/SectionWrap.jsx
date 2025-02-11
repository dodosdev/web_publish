import React from 'react';


export default function SectionWrap({id, title, children}) {
    return (
        <section id={id} style={{backgroundColor:"green"}}>
            <h2>{title}</h2>
            {/* {id === 'skill' && <p class="description">Skills & Attributes</p>} */}
            <div className='contents-box' >
                    <h3>content</h3>
                    <ul>
                        <li>내용</li>
                    </ul>
            </div>
            {children}
        </section>
    );
}

