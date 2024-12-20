import ContentTopBtn from "./ContentTopBtn.jsx";
import ContentTopMain from "./ContentTopMain.jsx";

export default function ContentTop() {
    return (
        <section id="home">
            <ContentTopMain 
                img="/images/avata.png"
                name="Judy"
            />
            <ContentTopBtn />
        </section>
    );
}

