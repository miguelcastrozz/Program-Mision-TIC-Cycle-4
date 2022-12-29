import "./../sytlesheets/Login.css";
import React, {useContext, useState} from "react";
import UserContext from "../context/UserContext";
import {useNavigate} from "react-router-dom";
import Input from "../components/forms/Input";
import Button from "../components/forms/Button";
import Logo from "../assets/Logo";
import {login} from "../services/authenticationService";
import TokenContext from "../context/TokenContext";

export default function Login() {

    const {setUser} = useContext(UserContext);
    const {setToken} = useContext(TokenContext);

    const [userInput, setUserInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    const [cookies, setCookies] = useCookies(["token", "user"]); /* Cookies a utilizar */

    const navigate = useNavigate();

    async function onButtonClick(e) {
        e.preventDefault();
        const token = await login(userInput, passwordInput);
        if (token) {
            // Variables globales
            setUser(userInput); /* Si el token existe, guardamos el usuario en el contexto */
            setToken(token);
            // Cookies
            setCookies("token", token, {path: "/", maxAge: 7 * 24 * 60 * 60}); /* Nombre de cookie que estableceremos, valor , options: /: toda la aplicación */
            setCookies("user", userInput, {path: "/", maxAge: 7 * 24 * 60 * 60});

            navigate("/panel");
        }
    }

    return (
        <section className="login">
            <div className="container">
                <Logo renderText={false} size="48px"/>
                <p className="title">Iniciar sesión en <b>Ullet</b></p>
                <form className="card form">
                    <Input onChange={(e) => setUserInput(e.target.value)}><b>Nombre de usuario</b></Input>
                    <Input onChange={(e) => setPasswordInput(e.target.value)} type="password"><b>Contraseña</b></Input>
                    <Button onClick={onButtonClick} type="submit" >Ingresar</Button>
                </form>
            </div>
        </section>
    )

}
