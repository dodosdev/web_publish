import Dwitter from "./Dwitter.jsx";
import './Dwitter.css';


export default function AppDwitter() {
    return (
        <div className="dwitter-container">
            <h1>Dwitter</h1>
            <ul className="dwitter-menu">
                <li>All Dwitter</li>
                <li>My Dwitter</li>
                <li>Login / SignUp</li>
            </ul>    

            {/** Dwitter map을 통해 출력 */}
            <Dwitter /> 
            <Dwitter />
            <Dwitter />
        </div>
    );
}