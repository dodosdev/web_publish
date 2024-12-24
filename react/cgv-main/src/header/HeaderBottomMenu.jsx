

export default function HeaderBottomMenu({name}) {
    return (
        <>
            {/* <a href="#">{name}</a> */}
            <span>{name}</span>
            <dl>
                <dt>영화</dt>
                <dd>무비차트</dd>
                <dd>아트하우스</dd>
                <dd>ICECON</dd>
            </dl>
        </>
    );
}