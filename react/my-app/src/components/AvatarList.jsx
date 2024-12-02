import Avatar from "./Avatar";


// props = {
//     list : [
//         {"img" : "/images/people1.webp", "name": "Smith", "age" : "20" },
//         {"img" : "/images/people2.webp", "name": "James", "age" : "30" },
//         {"img" : "/images/people3.webp", "name": "Kelly", "age" : "19" },
//     ],
//     name: "홍길동"
// }


export default function AvatarList({list}) {  //구조분해할당

    return (
        <ul>
            {list.map((object) => 
                <li><Avatar img={object.img} 
                            name={object.name} 
                            age={object.age} />
                </li>

            )}  
        </ul>
    ); 


}