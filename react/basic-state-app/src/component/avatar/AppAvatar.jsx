import Avatar from './Avatar';
import './Avatar.css';

export default function AppAvatar() {

    const list = [
        {
            "img": "/images/people1.webp",
            "name": "Smith",
            "isNew" : true
        },
        {
            "img": "/images/people2.webp",
            "name": "James"
        },
        {
            "img": "/images/people3.webp",
            "name": "Kelly"
        },

    ];
    
    return(  
        <div className="avatar-container">
            {list && list.map(item =>  //&&비어있지 않은경우만 사용 /true면 리스트를보여줌
                <Avatar img={item.img}
                        name={item.name} 
                        isNew={item.isNew} />
            )}
        </div>     
    );
}