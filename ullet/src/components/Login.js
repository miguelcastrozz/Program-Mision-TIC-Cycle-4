import React, {useState} from "react";
import Gap from "./utils/Gap";
import Input from "./forms/Input";
import Button from "./forms/Button";
import Card from "./utils/Card";

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
        <form onSubmit={manejarEnvio}>
            <Card padding="2rem" flexDirection="column" borderRadius="0.5rem">

                <h1>Login</h1>

                <Gap>1rem</Gap>

                <Input
                    onChange={(evento) => setUsuario(evento.target.value) } /* En el usuario se guarda el valor del input */
                >User name</Input>

                <Input
                    type="password"
                    onChange={(evento) => setPassword(evento.target.value) } /* En el usuario se guarda el valor del input */
                >Contraseña</Input>

                <Gap>1rem</Gap>

                <Button
                    type="submit"
                >Ingresar</Button>
            </Card>
        </form>
    )

}
