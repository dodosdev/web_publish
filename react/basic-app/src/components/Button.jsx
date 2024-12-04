

export default function Button ({name,type}) {
    return(
        <div className="button" key={this.props.name}>
            <button type={type}>{name}</button>
        </div>
    );
}