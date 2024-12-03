import '../css/Avatar.css';

// props = {img: "/images/people2.webp"}
// props.img

export default function AvatarImage({img}) { 
    //구조분해할당으로 받으세요! AvatarImage({img})
    return(
        <img src={img} className="avatar-img"></img>

    );
}


// export default function AvatarImage(a) { 
//     //레퍼런스 객체 수정가능  AvatarImage(a)
//     return(
//         <img src={a.img} className="avatar-img"></img>

//     );
// }
