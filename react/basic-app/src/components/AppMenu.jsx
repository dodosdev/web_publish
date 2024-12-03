import Menu from './Menu.jsx';
import MenuList from './MenuList.jsx';


export default function AppMenu (){

    const nameList = [
        {"name": "Home", "href": "#home", "bg": "gray", "color": "white"},
        {"name": "About",  "href": "#about", "bg": "tomato", "color": "blue"},
        {"name": "Skill", "href": "#skills", "bg": "tomato"},
        {"name": "Mywork", "href": "#mywork", "bg": "tomato"},
        {"name": "Testimonial", "href": "#testimonial", "bg": "tomato"},
        {"name": "Contact", "href": "#content", "bg": "pink"},
        {"name": "Support", "href": "#support", "bg": "tomato"},
        {"name" : "Interview", "href": "#interview", "bg": "yellow"},

    ];


    return ( 
        <>
            <div>
                <Menu name="Home"  href="#home"  bg="gray" />
                <Menu name="About" href="about" bg="pink" />
                <Menu name="Skill" href="#skills" bg="yellow" />
                <Menu name="My work" href="#mywork" bg="violet" />
                <Menu name="Testimonial"  href="#testimonial"bg="aqua" />
                <Menu name="Contact" href="#content" bg="pink" />
                <Menu name="Support" href="#support" bg="tomato" />
                <Menu name="Interview" href="#interview" bg="yellow" />
            </div>
            <div>
                <MenuList list={nameList} />
            </div>
        </>
    );
}







