import '../css/Avatar.css';
import AvatarImage from './AvatarImage.jsx';

export default function Avatar({img, name}) { 
    //구조분해할당으로이미지불러옴
    return (
        <div className="avatar-container">
            <AvatarImage img={img} />
            <p>{name}</p>
        </div>
    );
}