
export default function PackgeContentItem({src, alt, text, price}) {
    return(
        <>
            <img src={src} 
                alt={alt} 
                width="100px" />
            <div>
                <p>{text}</p>
                <p>{price}</p>
            </div>
        </>
    );
}