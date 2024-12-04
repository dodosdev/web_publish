// import './Dwitter.css';



export default function Dwitter(props) {  //구조분해할당
    return (
        <div className="dwitter" key={props.id}>
            <div className="dwitter-image">
                <img src={props.img} alt="image" />
            </div>
            <div className="title">
                <span>{props.name}</span>
                <span>{props.id}</span>
                <span>{props.date}</span>
            </div>
            <div className="content">{props.content}</div>
        </div>
    );
}