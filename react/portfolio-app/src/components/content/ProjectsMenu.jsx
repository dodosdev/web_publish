import React from 'react';
import Menu from './Menu.jsx';

export default function ProjectsMenu({item}) {
    return (
        <>

            <li><Menu name={item.name}
                        count={item.count}
                        category={item.category}
                        // click ={handMenuClickReq}
            /></li>


            {/* <li><button class="category category--selected">All<span class="category__count">8</span></button></li>
            <li><button class="category">Front-end<span class="category__count">4</span></button></li>
            <li><button class="category">Back-end<span class="category__count">2</span></button></li>
            <li><button class="category">Mobile<span class="category__count">2</span></button></li> */}
        </>
    );
}



// import Menu from './Menu.jsx';

// export default function MenuList({list, click}){
//     const handMenuClickReq = (category) => {
//         click(category);
//     }


//     return (
//         <ul className="menu-container">
//             { list && list.map((item) => 
//                 <li><Menu name={item.name} 
//                             href={item.href}
//                             bg={item.bg}
//                             color={item.color} 
//                             category={item.category}
//                             click ={handMenuClickReq}
//                             /></li>) }
//         </ul>
//     );
// } 
