import AvatarImage from "./AvatarImage.jsx";
// {list: [~]}

export default function AvatarImageList({list}) {
    return (
        <ul>
            {list.map((item) => <li><AvatarImage img={item.img} /></li> ) } 
            
        </ul>
    );
}




//item = {"img": "/images/people1.webp"}  

// {"img": "/images/people1.webp"}, {}이런것은  {list.map((item)
// item을 표기 