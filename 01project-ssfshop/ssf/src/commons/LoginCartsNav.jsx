export default function LoginCartsNav({ activeTab, setActiveTab, menuListName = [] }) {
    return (
        <ul className="tab" style={{ backgroundColor: "green" }}>
            {menuListName.map((menu) => (
                <li>
                    <a 
                        href={`#${menu.tab}`} 
                        className={activeTab === menu.tab ? "on" : ""} 
                        onClick={(e) => {
                            e.preventDefault();
                            setActiveTab(menu.tab);
                        }}
                    >
                        {menu.label}
                    </a>
                </li>
            ))}
        </ul>
    );
}