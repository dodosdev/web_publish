import './Dwitter.css';



export default function Dwitter() {
    return (
        <div className="dwitter">
            <div className="dwitter-image">
                <img src="/images/people1.webp" alt="image" />
            </div>
            <div className="title">
                <span>Smith</span>
                <span>@smith</span>
                <span>2024-12-01</span>
            </div>
            <div className="content">
                감기 조심하세요~
            </div>
        </div>
    );
}