import "./../sytlesheets/nav.css"
import Logo from "../assets/Logo";
import Button2 from "../components/forms/Button2";
import {Link} from "react-router-dom";

export function NavBar() {
    return (
        <>
            <nav className="nav">
                <ul className="menu container flex">
                    <li><Logo size="34px" renderText={true}/></li>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/about">Nosotros</Link></li>
                    <li><Link to={"/login"}><Button2>Ingresar</Button2></Link> </li>
                </ul>
            </nav>
        </>
    );
}
