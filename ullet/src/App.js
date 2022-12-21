import React from "react";
import {Route, Routes} from "react-router-dom";
import "./assets/global.css"
import Home from "./views/Home";
import Login from "./views/Login";
import UserPanel from "./views/UserPanel";
import UserProvider from "./context/UserContext";
import {TokenProvider} from "./context/TokenContext";
import {CookiesProvider} from "react-cookie";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<CookiesProvider><TokenProvider><UserProvider><Login/></UserProvider></TokenProvider></CookiesProvider>}/>
            <Route path="/panel" element={<CookiesProvider><TokenProvider><UserProvider><UserPanel/></UserProvider></TokenProvider></CookiesProvider>}/>
        </Routes>
    );
}
