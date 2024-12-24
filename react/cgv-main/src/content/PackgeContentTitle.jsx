

export default function PackgeContentTitle({title}) {
    return(
        <div>
        <span className="package-content-list">
            <h5><b>{title}</b></h5>
            <button className="package-title-button">더보기</button>
        </span>
    </div>

    );
}