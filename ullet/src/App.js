import React, {useState} from "react";
import Button from "./components/forms/Button";
import "./assets/global.css"
import Card from "./components/utils/Card";
import Input from "./components/forms/Input";
import Gap from "./components/utils/Gap";
import Login from "./components/Login";

export default function App() {

    const [ contador, setContador ] = useState(0);

    function incrementar() {
        setContador(contador + 1)
    }

    function reiniciar() {
        setContador(0)
    }

    return (
        <div>
            <Login></Login>
            <p>Contador: {contador}</p>
            <Button onClick={incrementar}>Incrementar</Button>
            <Button onClick={reiniciar}>Reiniciar</Button>
        </div>
    );

}
