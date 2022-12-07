import React from "react";
import Gap from "./utils/Gap";
import Input from "./forms/Input";
import Button from "./forms/Button";
import Card from "./utils/Card";

export default function Login() {
    return (<Card padding="2rem" flexDirection="column" borderRadius="0.5rem">
        <h1>Login</h1>
        <Gap>1rem</Gap>
        <Input>User name</Input>
        <Input type="password">Contraseña</Input>
        <Gap>1rem</Gap>
        <Button>Ingresar</Button>
    </Card>)
}