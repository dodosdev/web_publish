
export default function MovieChartContent({img, title, rank}) {
    return (

        // <h3>KOBIS @ KMDB Rest API 연동</h3>
        <article class="content-moviechart-list">
            <ul>
                <li>
                    <div>
                        <img src={img} />
                    </div>
                    <div><h3>{title}</h3></div>
                    <div><h5>{rank}</h5></div>
                </li>
            </ul>
        </article>


    );
}   