import '../css/Menu.css';


export default function Menu({name, href, bg, color}) {  
    //구조분해할당
    return (
        <a href={href} 
            className="menu-item"
            style={{backgroundColor:bg, color:color}}>{name}</a>
    );
}