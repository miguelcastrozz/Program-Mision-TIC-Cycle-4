import React from "react";
import {Route, Routes} from "react-router-dom";
import "./assets/global.css"
import Home from "./views/Home";
import Login from "./views/Login";
import UserPanel from "./views/userPanel";
import UserProvider from "./context/UserContext";

export default function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<UserProvider><Login /></UserProvider>}/>
                <Route path="/panel" element={<UserProvider><UserPanel /></UserProvider>}/>
            </Routes>
        </div>
    );
}
