import Menu from './Menu.jsx';

export default function MenuList({list, click}){
    const handMenuClickReq = (category) => {
        click(category);
    }


    return (
        <ul className="menu-container">
            { list && list.map((item) => 
                <li><Menu name={item.name} 
                            href={item.href}
                            bg={item.bg}
                            color={item.color} 
                            category={item.category}
                            click ={handMenuClickReq}
                            /></li>) }
        </ul>
    );
} 
