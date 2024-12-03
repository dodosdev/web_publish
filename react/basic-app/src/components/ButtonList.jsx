import Button from "./Button.jsx";

export default function ButtonList ({list}) {
    return (
        <div>
            {list.map((item) => 
                    <Button name={item.name} type={item.type} />)}  
        </div>
    );
}

//<Button name={item.name} type={item.type} />)} 버튼반복작업
