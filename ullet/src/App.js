import React, {useState} from "react";
import { Link, Route, Routes} from "react-router-dom"
import "./assets/global.css"
import Button from "./components/forms/Button";
import Card from "./components/utils/Card";
import Input from "./components/forms/Input";
import Gap from "./components/utils/Gap";
import Home from "./views/Home";
import Login from "./views/Login";
import NewUser from "./views/NewUser";
import NavBar from "./components/NavBar";
import User from "./views/User";
import { Nav } from "./views/Nav";

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
            <nav>
                <Link to="/">Home</Link><br/>
                <Link to="/login">Login</Link><br/>
                <Link to="/user">User</Link><br/>
            </nav>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/user">
                        <Route path="/user/" element={<User />}></Route>
                        <Route path="/user/new" element={<NewUser />}></Route>
                        <Route path="/user/:name" element={<User />}></Route>
                    </Route>
                    <Route path="*" element={<h1>404: Not found</h1>}></Route>
                </Routes>
        </div>
    );

}
