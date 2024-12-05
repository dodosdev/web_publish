

export default function Button ({name,type}) {
    return(
        <div className="button">
            <button type={type}>{name}</button>
        </div>
    );
}