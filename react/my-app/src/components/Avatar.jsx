import './Avatar.css';




// props = {
//     "img": "images/people1.webp",
//     "name": "Smith"
// }


//Props를 통해 데이터 전달하기
export default function Avatar({name, img, age}) {

    return (
        <div className="avatar-container">
            <img src= {img}  className="avatar" />
            <div>{name}, {age}</div>
        </div>

    );
}




