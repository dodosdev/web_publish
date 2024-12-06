import PackgeContentItem from "./PackageContentItem.jsx";
import PackgeContentTitle from "./PackgeContentTitle.jsx";


export default function PackgeContent({title, list}) {
    return(

        <div className="package-title-border"> 
            <PackgeContentTitle title={title} />

            <ul>
                
                {list && list.map(item =>
                    <li>
                        <PackgeContentItem 
                            src={item.src}
                            alt={item.alt}
                            text={item.text}
                            price={item.price}
                        />
                    </li>
                )}
            </ul>
        </div>

        
    );
}