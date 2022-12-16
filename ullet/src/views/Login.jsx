import "./../sytlesheets/Login.css"

import React, {useState} from "react";
import Input from "../components/forms/Input";
import Button from "../components/forms/Button";
import Logo from "../assets/Logo";
import {Link} from "react-router-dom";

export default function Login() {

    async function manejarEnvio(evento) {
        evento.preventDefault();
        const res = fetch("http://localhost:8080/login", {
            method: "GET",
            mode: "cors", /* Método de seguridad para que no se pueda acceder a la API desde cualquier lugar */
            headers: {
                "Content-Type": "application.json", /* OBLIGATORIO: Indicar que el contenido es JSON */
                user: usuario,
                password: password
            }
        }) /* fetch = Petición http */
        alert(res.message);
    }

    const [ usuario, setUsuario ] = useState("");
    const [ password, setPassword ] = useState("");

    return (
        <section className="login flex">
            <Logo renderText={false} size="48px"/>
            <p className="title">Iniciar sesión en <b>Ullet</b></p>
            <form onSubmit={manejarEnvio} className="card form">
                <Input onChange={(evento) => setUsuario(evento.target.value) } /* En el usuario se guarda el valor del input */ ><b>Nombre de usuario</b></Input>
                <Input type="password" onChange={(evento) => setPassword(evento.target.value) } /* En el usuario se guarda el valor del input */ ><b>Contraseña</b></Input>
                <Link to={"/panel"}><Button type="submit" >Ingresar</Button></Link>
            </form>
        </section>
    )

}
