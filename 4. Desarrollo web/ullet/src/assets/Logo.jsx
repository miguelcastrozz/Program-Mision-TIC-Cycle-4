import "./../sytlesheets/global.css" // TODO - De pronto toca quitar esta línea
import "./../sytlesheets/logo.css"
import logo from "./logo.png"
import {NavLink} from "react-router-dom";

export default function Logo({showText, size = "28px"}) {

    const style = {
        width: size,
        height: size
    }

    return (
        <NavLink to={"/"} className="logo flex inline-flex">
                <img src={logo} style={style} alt="Logo de Ullet" />
                {showText ? <h1 className="title">Ullet</h1> : null}
        </NavLink>
    );

}
