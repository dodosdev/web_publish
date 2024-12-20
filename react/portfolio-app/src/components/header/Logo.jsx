
export default function Logo({src, alt, logo}) {
    return (
        <div class="header__logo">
            <img class="header__logo__img" src={src} alt={alt} />
            <h1 class="header__logo__title">{logo}</h1>
        </div>
    );
}

