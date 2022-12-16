import React, {useState} from "react";
import "./assets/global.css"
import Home from "./views/Home";
import Login from "./views/Login";
import NewUser from "./views/NewUser";
import User from "./views/User";
import {NavBar} from "./views/NavBar";
import {Route, Routes} from "react-router-dom";
import PanelUsuario from "./views/PanelUsuario";

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
            <NavBar></NavBar>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/about" element={<p>HOLA</p>}/>
                <Route path="/panel" element={<PanelUsuario />}/>
            </Routes>
        </div>
    );

}
