
export default function AirbnbComponent(props) {
    return (  //JSX
        <div className="container">
            <img src= {props.img} />
            <div className="description">
                <p className="d1">{props.d1}</p>
                <p className="d2">{props.d2}</p>
                <p className="d3">{props.d3}</p>
                <p className="d4">{props.d4} /박</p>
            </div>
        </div>
    );
}